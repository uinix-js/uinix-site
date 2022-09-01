import {results} from '../data.js';
import {Result} from './result.js';

export function Results() {
  return results.map((key) => <Result key={key} />);
}
