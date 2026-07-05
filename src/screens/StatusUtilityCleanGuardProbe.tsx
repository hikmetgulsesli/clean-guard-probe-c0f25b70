// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Utility - Clean Guard Probe
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, CheckCircle2, CircleAlert, Download, HeartPulse, LogIn, RefreshCw, Settings, Shield } from "lucide-react";


export type StatusUtilityCleanGuardProbeActionId = "refresh-1" | "settings-2" | "refresh-status-3";

export interface StatusUtilityCleanGuardProbeProps {
  actions?: Partial<Record<StatusUtilityCleanGuardProbeActionId, () => void>>;

}

export function StatusUtilityCleanGuardProbe({ actions }: StatusUtilityCleanGuardProbeProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface border-b border-outline-variant w-full top-0 z-50">
      <div className="flex justify-between items-center w-full px-md py-sm max-w-max-width mx-auto">
      <div className="flex items-center gap-xs">
      <span className="text-headline-md font-headline-md font-bold text-primary">Clean Guard Probe</span>
      </div>
      <div className="flex items-center gap-sm">
      <button className="text-on-surface-variant hover:bg-surface-container transition-colors p-xs rounded-full flex items-center justify-center" type="button" aria-label="Refresh" data-action-id="refresh-1" onClick={actions?.["refresh-1"]}>
      <RefreshCw aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container transition-colors p-xs rounded-full flex items-center justify-center" type="button" aria-label="Settings" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-grow w-full max-w-max-width mx-auto px-md py-lg flex flex-col gap-lg">
      {/* Controls & Meta */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md border-b border-surface-variant pb-md">
      <div>
      <h1 className="text-headline-lg font-headline-lg text-on-surface md:hidden">System Status</h1>
      <h1 className="text-headline-lg font-headline-lg text-on-surface hidden md:block">System Status</h1>
      <p className="text-body-sm font-body-sm text-on-surface-variant mt-xs">Updated: 2 minutes ago</p>
      </div>
      <div className="flex items-center gap-md">
      <div className="flex items-center gap-sm">
      <span className="text-label-md font-label-md text-on-surface">Ready</span>
      <label className="relative inline-flex items-center cursor-pointer">
      <input defaultChecked={true} className="sr-only peer" type="checkbox" defaultValue="" />
      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      <button className="bg-primary text-on-primary hover:bg-on-primary-fixed-variant transition-colors px-md py-sm rounded flex items-center gap-xs" type="button" data-action-id="refresh-status-3" onClick={actions?.["refresh-status-3"]}>
      <RefreshCw className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md">Refresh Status</span>
      </button>
      </div>
      </section>
      {/* Status Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {/* Card 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col gap-xs relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-unit bg-primary"></div>
      <div className="flex justify-between items-start pl-xs">
      <h2 className="text-label-sm font-label-sm text-on-surface-variant uppercase">System Health</h2>
      <HeartPulse className="text-primary text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="pl-xs mt-sm">
      <p className="text-headline-md font-headline-md text-on-surface">Healthy</p>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col gap-xs relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-unit bg-primary"></div>
      <div className="flex justify-between items-start pl-xs">
      <h2 className="text-label-sm font-label-sm text-on-surface-variant uppercase">Scanner</h2>
      <BadgeHelp className="text-primary text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="pl-xs mt-sm">
      <p className="text-headline-md font-headline-md text-on-surface">Active</p>
      </div>
      </div>
      {/* Card 3 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col gap-xs relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-unit bg-primary"></div>
      <div className="flex justify-between items-start pl-xs">
      <h2 className="text-label-sm font-label-sm text-on-surface-variant uppercase">Network</h2>
      <Shield className="text-primary text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="pl-xs mt-sm">
      <p className="text-headline-md font-headline-md text-on-surface">Secure</p>
      </div>
      </div>
      </section>
      {/* Inline Error / Alert (Example) */}
      <section className="bg-error-container text-on-error-container p-sm rounded border border-error/20 flex items-start gap-sm">
      <CircleAlert className="text-error shrink-0" aria-hidden={true} focusable="false" />
      <div className="flex flex-col">
      <span className="text-label-md font-label-md font-bold text-error">Sync Warning</span>
      <span className="text-body-sm font-body-sm mt-xs">Local definitions are out of date. Attempting background refresh.</span>
      </div>
      </section>
      {/* Recent Activity List */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded overflow-hidden">
      <div className="px-md py-sm border-b border-surface-variant bg-surface-container-low">
      <h3 className="text-label-md font-label-md text-on-surface uppercase">Recent Activity</h3>
      </div>
      <ul className="flex flex-col">
      <li className="px-md py-sm border-b border-surface-variant flex justify-between items-center hover:bg-surface-container-low transition-colors">
      <div className="flex items-center gap-sm">
      <CheckCircle2 className="text-outline text-[16px]" aria-hidden={true} focusable="false" />
      <span className="text-body-md font-body-md text-on-surface">Full system scan completed</span>
      </div>
      <span className="text-label-sm font-label-sm text-on-surface-variant">10:45 AM</span>
      </li>
      <li className="px-md py-sm border-b border-surface-variant flex justify-between items-center hover:bg-surface-container-low transition-colors">
      <div className="flex items-center gap-sm">
      <Download className="text-outline text-[16px]" aria-hidden={true} focusable="false" />
      <span className="text-body-md font-body-md text-on-surface">Definition update applied v.2.4.1</span>
      </div>
      <span className="text-label-sm font-label-sm text-on-surface-variant">09:12 AM</span>
      </li>
      <li className="px-md py-sm flex justify-between items-center hover:bg-surface-container-low transition-colors">
      <div className="flex items-center gap-sm">
      <LogIn className="text-outline text-[16px]" aria-hidden={true} focusable="false" />
      <span className="text-body-md font-body-md text-on-surface">Admin login from trusted network</span>
      </div>
      <span className="text-label-sm font-label-sm text-on-surface-variant">Yesterday</span>
      </li>
      </ul>
      </section>
      </main>
    </>
  );
}
