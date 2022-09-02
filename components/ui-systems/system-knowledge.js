export function SystemKnowledge({system}) {
  return <pre>{JSON.stringify(system, null, 2)}</pre>;
}
