import data from '../src/data.json';

export const THREADS = data.THREADS || {};
export const TAGS = data.TAGS || {};
export const READING_PATHS = data.READING_PATHS || {};
export const STUDY_PROMPTS = data.STUDY_PROMPTS || {};
export const THREAD_IDENTITY = data.THREAD_IDENTITY || {};
export const order = ['temple', 'priesthood', 'image', 'covenant', 'exodus', 'reign', 'creation'].filter(id => THREADS[id]);

export function stripThreadName(name = '') { return name.replace(' Thread', ''); }
export function themeColor(id) { return THREAD_IDENTITY[id]?.color || '#2b2b2b'; }
export function icon(id) { return THREAD_IDENTITY[id]?.icon || '•'; }
export function subtitle(id) { return THREAD_IDENTITY[id]?.subtitle || ''; }
export function getPrompts(id, idx) {
  return STUDY_PROMPTS[id]?.[idx] || [
    'What does this movement reveal about God’s character or purpose?',
    'What tension or problem is becoming clearer here?',
    'How does this movement prepare for what comes next in the thread?'
  ];
}
export function getReadings(id, idx) { return READING_PATHS[id]?.[idx] || []; }
