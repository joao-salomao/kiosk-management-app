import { ReactElement } from "react";
import { Log } from "lib/types";
import { logValueParser } from "lib/utils/logValueParser";

export const DiffChanges = ({ log }: { log: Log }): ReactElement => {
  const changes = JSON.parse(log.description);
  const keys = Object.keys(changes['from']);

  if (keys.length === 0) return <></>;

  return (
    <div>
      <p className="font-bold">Changes:</p>
      {
        keys.map((key) => (
          <div key={key}>
            <span className="underline">{`#${key}`}</span> from "{logValueParser(changes['from'][key])}" to "{logValueParser(changes['to'][key])}"
          </div>
        ))
      }
    </div>
  )
}