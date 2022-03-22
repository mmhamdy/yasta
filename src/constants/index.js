export const FILTER_MAP = {
  All: () => true,
  Active: task => !task.done,
  Archive: task => task.done
};

export const FILTER_NAMES = Object.keys(FILTER_MAP);