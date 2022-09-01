import {files} from '../data.js';
import {CommitSummary} from './commit-summary.js';
import {Container} from './container.js';
import {File} from './file.js';

export function Repo() {
  return (
    <Container header={<CommitSummary />} headerBg="background.blueWash">
      {files.map((file) => (
        <File key={file.name} file={file} />
      ))}
    </Container>
  );
}
