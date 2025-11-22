import { supabase } from './client';
import { handleSupabaseError } from '../../utils/supabase-helpers';

/**
 * Progress Service
 * Responsabilidad única: Manejo del progreso de lecciones del usuario
 * Sigue el principio SRP
 */

export interface LessonProgress {
  id?: string;
  lessonId: string;
  completed: boolean;
  xpEarned: number;
  completedAt?: string;
}

/**
 * Marca una lección como completada y otorga XP
 * @param lessonId - ID de la lección completada
 * @param xpEarned - Cantidad de XP ganado
 * @returns Progreso de la lección
 */
export const markLessonComplete = async (
  lessonId: string,
  xpEarned: number
) => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw new Error('Usuario no autenticado');

    // Insertar o actualizar progreso de lección
    const { data: progressData, error: progressError } = await supabase
      .from('lesson_progress')
      .upsert(
        {
          user_id: user.id,
          lesson_id: lessonId,
          completed: true,
          xp_earned: xpEarned,
          completed_at: new Date().toISOString(),
        },
        {
          onConflict: 'user_id,lesson_id',
        }
      )
      .select()
      .single();

    if (progressError) throw handleSupabaseError(progressError);

    // Actualizar XP del usuario en el perfil
    const { error: profileError } = await supabase.rpc('increment_user_xp', {
      user_id: user.id,
      xp_amount: xpEarned,
    });

    // Si no existe la función RPC, actualizar manualmente
    if (profileError) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('xp')
        .eq('id', user.id)
        .single();

      const newXp = (profile?.xp || 0) + xpEarned;

      await supabase
        .from('profiles')
        .update({ xp: newXp })
        .eq('id', user.id);
    }

    return progressData;
  } catch (error) {
    throw handleSupabaseError(error as Error);
  }
};

/**
 * Obtiene el progreso de una lección específica
 * @param lessonId - ID de la lección
 * @returns Progreso de la lección o null si no existe
 */
export const getLessonProgress = async (
  lessonId: string
): Promise<LessonProgress | null> => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return null;

    const { data, error } = await supabase
      .from('lesson_progress')
      .select('*')
      .eq('user_id', user.id)
      .eq('lesson_id', lessonId)
      .single();

    if (error && error.code !== 'PGRST116') {
      // PGRST116 = no rows returned
      throw handleSupabaseError(error);
    }

    return data || null;
  } catch (error) {
    throw handleSupabaseError(error as Error);
  }
};

/**
 * Obtiene todo el progreso del usuario
 * @returns Lista de progreso de todas las lecciones
 */
export const getAllProgress = async (): Promise<LessonProgress[]> => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return [];

    const { data, error } = await supabase
      .from('lesson_progress')
      .select('*')
      .eq('user_id', user.id)
      .order('completed_at', { ascending: false });

    if (error) throw handleSupabaseError(error);
    return data || [];
  } catch (error) {
    throw handleSupabaseError(error as Error);
  }
};

/**
 * Obtiene los IDs de todas las lecciones completadas
 * @returns Array de IDs de lecciones completadas
 */
export const getCompletedLessonIds = async (): Promise<string[]> => {
  try {
    const progress = await getAllProgress();
    return progress
      .filter((p) => p.completed)
      .map((p) => p.lessonId);
  } catch (error) {
    throw handleSupabaseError(error as Error);
  }
};
