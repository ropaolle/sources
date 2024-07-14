import { Clock } from "@/components/Clock";
import sebLogo from "/seb.svg";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

type Server = {
  system: string;
  host: string;
  environment: string;
  alias: string;
  name: string;
  ip: string;
  status: string;
  timestamp: string;
};

type Environment = {
  name: string;
  servers: Server[];
};

export type System = {
  name: string;
  fullName: string;
  stepId: string;
  environments: Environment[];
};

export function Header() {
  return (
    <header className="flex flex-row items-center justify-between bg-seb-grey1 text-slate-200">
      <div className=" min-w-64">
        <img src={sebLogo} className="left-0 top-0 h-16" alt="SEB logo" />
      </div>
      <div className="mx-4 text-4xl">Team SWIFT</div>
      <div className="min-w-64 pr-4 text-4xl">
        <Clock />
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 bg-seb-bggrey pt-4 tv:hidden">
      <div className="bg-seb-grey1 p-4 text-center text-seb-grey7">© Skandinaviska Enskilda Banken AB</div>
    </footer>
  );
}

function StatusBadge({ status }: { status: string }) {
  const getStatusFormat = (/* status: string */) => {
    switch (status) {
      case "1":
        return "bg-seb-darkgreen1";
      case "2":
        return "bg-seb-darkyellow2";
      case "3":
      case "4":
      case "5":
        return "bg-seb-darkred1 text-slate-300";
      default:
        return "bg-seb-grey4 text-slate-900";
    }
  };

  return (
    <span className={cn("rounded-full px-2 text-xl font-bold tv:text-4xl ", `${getStatusFormat()}`)}>{status}</span>
  );
}

export function Server({ name, status, host, timestamp }: Server) {
  const getStatusFormatServer = (/* status: string */) => {
    switch (status) {
      case "1":
        return "bg-seb-grey7";
      case "2":
        return "bg-seb-yellow";
      case "3":
      case "4":
      case "5":
        return "bg-seb-red text-slate-900+";
      default:
        return "bg-seb-grey4 text-seb-grey2 striped";
    }
  };

  return (
    <div className={cn("col-span-6 items-center p-2 text-3xl tv:text-5xl", `${getStatusFormatServer(/* status */)}`)}>
      <div className="flex items-center">
        <Icon icon="clarity:host-solid" className="mr-1 tv:ml-[-4px]" />
        <div className="mr-auto">{name}</div>
        <StatusBadge status={status} />
      </div>
      <div className="flex items-center text-xs tv:mt-2 tv:text-sm">
        <Icon icon="clarity:clock-line" className="mx-1" />
        <div>{timestamp}</div>
        <div className="ml-auto">{host}</div>
      </div>
    </div>
  );
}

export function Environment({ name, servers }: Environment) {
  const getEnvironmentFormat = (environment) => {
    switch (environment) {
      case "prod":
        return "bg-green-700";
      // case "acc":
      //   return "bg-blue-700";
      default:
        return "bg-slate-800";
    }
  };

  return (
    <div className={cn("grid grid-cols-7 gap-1", `grid-rows-${servers.length}`)}>
      <div
        className={cn(
          "col-span-1 flex items-center justify-center text-2xl uppercase text-slate-200 vertical-writing-lr tv:text-4xl",
          `${getEnvironmentFormat(name)}`,
          `row-span-${servers.length}`,
        )}
      >
        {name}
      </div>

      {servers.map((server) => (
        <Server {...server} />
      ))}
    </div>
  );
}

export function Application({ system /* , showLabels = false */ }: { system: System; showLabels?: boolean }) {
  return (
    <div className="space-y-4 bg-seb-grey9 p-2" key={system.name}>
      <div>
        <div className="text-4xl font-bold uppercase  text-slate-800 tv:text-6xl">{system.name}</div>
        <div className={cn("overflow-hidden whitespace-nowrap tv:hidden" /* , showLabels || "hidden" */)}>
          {system.fullName}
        </div>
      </div>
      {system.environments.map((env) => (
        <Environment {...env} />
      ))}
    </div>
  );
}

export function AlertTable({ alerts, showLabels = false }: { alerts: string[]; showLabels: boolean }) {
  return (
    <>
      <div className={cn("mb-2 text-2xl font-bold", showLabels || "hidden")}>Production alerts in last 24 hours</div>
      <div className=" w-full">
        <table className="table-fixed+ w-full table-auto text-xl">
          <thead className="bg-seb-grey1 text-left text-slate-200">
            <tr>
              <th className="p-2">Application</th>
              {/* <th className="p-2">ID</th> */}
              <th className="p-2">Summary</th>
              <th className="p-2">Environment</th>
              <th className="p-2">Count</th>
              <th className="p-2">1st event</th>
              <th className="p-2">last event</th>
              {/* <th className="p-2">evnTimeChart</th> */}
            </tr>
          </thead>
          <tbody>
            {alerts.map((row) => {
              const [a, , c, d, e, f, g] = row.split(",");
              return (
                <tr className="align-top odd:bg-gray-200">
                  <td className="p-2">{a}</td>
                  <td className="max-w-[30vw]  overflow-hidden overflow-ellipsis whitespace-nowrap p-2">{c}</td>
                  <td className="p-2">{d}</td>
                  <td className="p-2">{e}</td>
                  <td className="p-2 ">{f.replace("T", " ")}</td>
                  <td className="p-2">{g.replace("T", " ")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function Legend({ showLabels = false }) {
  const State = ({ status = "0", label = "" }) => (
    <div className="">
      <StatusBadge status={status} />
      <span className="ml-2 text-xl text-slate-200">{label}</span>
    </div>
  );

  return (
    <>
      <div className={cn("mb-2 text-2xl font-bold", showLabels || "hidden")}>Legend</div>
      <div className="h-full space-y-2 bg-seb-grey1 p-4">
        <State status="0" label="No status" />
        <State status="1" label="All OK" />
        <State status="2" label="Partial faild" />
        <State status="3" label="Application error" />
      </div>
    </>
  );
}
