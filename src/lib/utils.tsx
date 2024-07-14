import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { systemList, serverList, tableContent } from "@/lib/server-list";
import { type System } from "@/components/Layout";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function loadSystems() {
  const date = new Date().toLocaleString();

  const systems: System[] = systemList.map((data) => {
    const [name, fullName, stepId] = data.split(",");

    return { name, fullName, stepId, environments: [] };
  });

  const servers = serverList.map((data) => {
    const [system, host, environment, alias, name, pdc, ip, status] = data.split(",");

    return { system, host, environment, alias, name, pdc, ip, status, timestamp: date };
  });

  for (const server of servers) {
    const currentSystem = systems.find(({ name }) => name === server.system);

    if (currentSystem) {
      const currentEnvironment = currentSystem.environments.find(({ name }) => name === server.environment);
      if (!currentEnvironment) {
        currentSystem.environments.push({
          name: server.environment,
          servers: [server],
        });
      } else {
        currentEnvironment.servers.push(server);
      }
    }
  }

  return systems;
}

export function loadAlerts() {
  return tableContent;
}
