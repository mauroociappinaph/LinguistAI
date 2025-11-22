import { supabase } from './client';
import { handleSupabaseError } from '../../utils/supabase-helpers';

/**
 * Vocabulary Service
 * Responsabilidad única: CRUD de vocabulario personalizado del usuario
 * Sigue el principio SRP - toda la lógica de vocabulario en un solo lugar
 */

export interface VocabularyItem {
  id?: string;
  word: string;
  translation?: string;
  lessonId?: string;
  masteryLevel?: number;
  lastReviewed?: string;
}

/**
 * Agrega una palabra al vocabulario personal del usuario
 * @param word - Palabra o frase a guardar
 * @param translation - Traducción opcional
 * @param lessonId - ID de la lección de donde proviene
 * @returns Item de vocabulario creado
 */
export const addVocabularyItem = async (
  word: string,
  translation?: string,
  lessonId?: string
) => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw new Error('Usuario no autenticado');

    const { data, error } = await supabase
      .from('user_vocabulary')
      .insert({
        word,
        translation,
        lesson_id: lessonId,
        user_id: user.id,
        mastery_level: 0,
      })
      .select()
      .single();

    if (error) throw handleSupabaseError(error);
    return data;
  } catch (error) {
    throw handleSupabaseError(error as Error);
  }
};

/**
 * Obtiene todo el vocabulario del usuario con filtros opcionales
 * @param filters - Filtros opcionales (lessonId, masteryLevel)
 * @returns Lista de items de vocabulario
 */
export const getUserVocabulary = async (filters?: {
  lessonId?: string;
  masteryLevel?: number;
}): Promise<VocabularyItem[]> => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw new Error('Usuario no autenticado');

    let query = supabase
      .from('user_vocabulary')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (filters?.lessonId) {
      query = query.eq('lesson_id', filters.lessonId);
    }

    if (filters?.masteryLevel !== undefined) {
      query = query.eq('mastery_level', filters.masteryLevel);
    }

    const { data, error } = await query;

    if (error) throw handleSupabaseError(error);
    return data || [];
  } catch (error) {
    throw handleSupabaseError(error as Error);
  }
};

/**
 * Actualiza el nivel de dominio de una palabra
 * @param id - ID del item de vocabulario
 * @param level - Nuevo nivel de dominio (0-5)
 * @returns Item actualizado
 */
export const updateMasteryLevel = async (id: string, level: number) => {
  try {
    if (level < 0 || level > 5) {
      throw new Error('El nivel de dominio debe estar entre 0 y 5');
    }

    const { data, error } = await supabase
      .from('user_vocabulary')
      .update({
        mastery_level: level,
        last_reviewed: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw handleSupabaseError(error);
    return data;
  } catch (error) {
    throw handleSupabaseError(error as Error);
  }
};

/**
 * Elimina un item del vocabulario
 * @param id - ID del item a eliminar
 */
export const deleteVocabularyItem = async (id: string) => {
  try {
    const { error } = await supabase
      .from('user_vocabulary')
      .delete()
      .eq('id', id);

    if (error) throw handleSupabaseError(error);
  } catch (error) {
    throw handleSupabaseError(error as Error);
  }
};
