import { createSelector, OutputSelector } from 'reselect';

const selectDirectory: (state: any) => any = (state) => state.directory;

export const selectDirectorySections: OutputSelector<
  any,
  any,
  (res: any) => any
> = createSelector([selectDirectory], (directory) => directory.sections);
