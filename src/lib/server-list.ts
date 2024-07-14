export const systemList = [
  "amh,Alliance Messaging Hub,99S51",
  "amhst,Alliance Messaging Hub Standalone,99S47",
  "agi,Alliance Messaging Hub Standalone,99S47",
  "sag,Alliance Messaging Hub Standalone,99S47",
  "awp,Alliance Messaging Hub Standalone,99S47",
  "awh,Alliance Messaging Hub Standalone,99S47",
  "cls,Alliance Messaging Hub Standalone,99S47",
];

export const serverList = [
  "amh,lspXXXXa,prod,amhp1,Prod 1,PDC1,192.168.10.23,0",
  "amh,lspXXXXa,prod,amhp2,Prod 2,PDC2,192.168.10.23,1",
  "amh,lspXXXXb,acc,amha1,Acc 1,PDC1,192.168.10.23,2",
  "amh,lspXXXXb,acc,amha2,Acc 2,PDC2,192.168.10.23,1",
  "amh,lspXXXXc,sys,amhs1,Sys 1,PDC1,192.168.10.23,1",
  "amh,lspXXXXc,sys,amhs2,Sys 2,PDC2,192.168.10.23,3",

  "amhst,lspXXXXa,prod,amhsp1,Prod 1,PDC1,192.168.10.23,1",
  "amhst,lspXXXXa,prod,amhsp2,Prod 2,PDC2,192.168.10.23,1",
  "amhst,lspXXXXb,acc,amhsa1,Acc 1,PDC1,192.168.10.23,1",
  "amhst,lspXXXXb,acc,amhsa2,Acc 2,PDC2,192.168.10.23,1",
  "amhst,lspXXXXc,sys,amhss1,Sys 1,PDC1,192.168.10.23,1",
  "amhst,lspXXXXc,sys,amhss2,Sys 2,PDC2,192.168.10.23,1",

  "agi,lspXXXXa,prod,amhsp1,Prod 1,PDC1,192.168.10.23,1",
  "agi,lspXXXXa,prod,amhsp2,Prod 2,PDC2,192.168.10.23,1",
  "agi,lspXXXXa,prod,amhsp1,Prod 1,PDC1,192.168.10.23,1",
  "agi,lspXXXXa,prod,amhsp2,Prod 2,PDC2,192.168.10.23,1",
  "agi,lspXXXXa,acc,amhsp1,Prod 1,PDC1,192.168.10.23,1",
  "agi,lspXXXXa,acc,amhsp2,Prod 2,PDC2,192.168.10.23,1",

  "sag,lspXXXXa,prod,amhsp1,Prod 1,PDC1,192.168.10.23,1",
  "sag,lspXXXXa,prod,amhsp2,Prod 2,PDC2,192.168.10.23,1",
  "sag,lspXXXXb,acc,amhsa1,Acc 1,PDC1,192.168.10.23,1",
  "sag,lspXXXXb,acc,amhsa1,Acc 1,PDC1,192.168.10.23,1",
  "sag,lspXXXXb,sys,amhsa1,Acc 1,PDC1,192.168.10.23,1",

  "awp,lspXXXXa,prod,amhsp1,Prod 1,PDC1,192.168.10.23,1",
  "awp,lspXXXXa,prod,amhsp2,Prod 2,PDC2,192.168.10.23,1",
  "awp,lspXXXXb,acc,amhsa1,Acc 1,PDC1,192.168.10.23,1",
  "awp,lspXXXXb,acc,amhsa1,Acc 1,PDC1,192.168.10.23,1",
  "awp,lspXXXXb,sys,amhsa1,Acc 1,PDC1,192.168.10.23,1",

  "awh,lspXXXXa,prod,amhsp1,Prod 1,PDC1,192.168.10.23,1",
  "awh,lspXXXXa,acc,amhsp2,Prod 2,PDC2,192.168.10.23,1",
  "awh,lspXXXXb,sys,amhsa1,Acc 1,PDC1,192.168.10.23,1",

  "cls,lspXXXXa,prod,amhsp1,Prod 1,PDC1,192.168.10.23,1",
  "cls,lspXXXXa,test,amhsp2,Prod 2,PDC2,192.168.10.23,1",
];

export const tableHeader = [
  "AffectedCI,AlarmIDKey,Summary,Environment,countPerEnv,1stEvtDate,lastEvtDate,evnTimeChart",
];

export const tableContent = [
  "SWIFT AMH,EVT_GIZDSMRT,Mount /net/amh-cfg-prd is full,Production,743,2024-05-15T13:33:59,2024-05-20T16:19:08,##__SPARKLINE__## 4 14 22 24 22 24 24 24 22 14 12 16 12 14 12 12 16 20 12 12 14 12 12 13 18 22 18 24 18 24 16 16 8 18 12 12 12 12 14 12 12 12 12 12 12 12 12 12 8",
  "SWIFT AWH,EVT_GE2TKNRQ,CPU usage is too high for a period,Production,12,2024-05-20T13:28:57,2024-05-20T13:33:57,##__SPARKLINE__## 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 3 9 0 0 0 0 0",
  "SWIFT SAG,EVT_GIZTKMBZ,SAG event with Severity Level: Severe component: Sag:SN-I with event number: 5004 - email Only lsp8762a.prdipa.seb.net,Production,3,2024-05-20T11:25:01,2024-05-20T11:25:01,##__SPARKLINE__## 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 2 1 0 0 0 0 0 0 0 0 0",
  "SWIFT SAG,EVT_GIZTIOJZ,SNL event with Severity Level: High with error code: SNLLIB011 - email Only lsp8762a.prdipa.seb.net,Production,3,2024-05-20T11:24:48,2024-05-20T11:24:48,##__SPARKLINE__## 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 2 1 0 0 0 0 0 0 0 0 0",
  "SWIFT SAG,EVT_GIZTIOJZ,SNL event with Severity Level: High with error code: SNLWFA020 - email Only lsp8762a.prdipa.seb.net,Production,3,2024-05-20T11:24:48,2024-05-20T11:24:48,##__SPARKLINE__## 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 2 1 0 0 0 0 0 0 0 0 0",
  "SWIFT SAG,EVT_GIZTKMJQ,SAG event with Severity Level: Warning component: Sag:APL-I with event number: 50 - email Only lsp8762a.prdipa.seb.net,Production,3,2024-05-20T11:24:36,2024-05-20T11:24:36,##__SPARKLINE__## 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 2 1 0 0 0 0 0 0 0 0 0",
  "SWIFT SAG,EVT_GIZTKMBZ,SAG event with Severity Level: Severe component: Sag:SN-I with event number: 5109 - email Only lsp8763a.prdipa.seb.net,Production,4,2024-05-20T10:49:59,2024-05-20T10:49:59,##__SPARKLINE__## 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 3 1 0 0 0 0 0 0 0 0 0 0",
  "SWIFT SAG,EVT_GIZTIOJZ,SNL event with Severity Level: High with error code: SNLBSS036 - email Only lsp8763a.prdipa.seb.net,Production,4,2024-05-20T10:49:44,2024-05-20T10:49:44,##__SPARKLINE__## 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 3 1 0 0 0 0 0 0 0 0 0 0",
  "PAYplus for CLS,EVT_GE3DINJZ,File /opt/app/cls/prod/seb/log/MASL_monitoring.log is older than configured threshold,Production,268,2024-05-18T11:33:39,2024-05-20T09:58:36,##__SPARKLINE__## 4 9 6 6 6 6 6 6 6 6 6 6 7 6 6 9 6 11 11 12 9 12 11 11 8 9 7 6 6 6 7 8 4 10 6 6 1 0 0 0 0 0 0 0 0 0 0 0 0",
  "SWIFT,EVT_GI2DSMBW,Certificate expires in less than 30 days lsp8809a.prdipa.seb.net,Production,2,2024-05-20T09:48:37,2024-05-20T09:48:37,##__SPARKLINE__## 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 2 0 0 0 0 0 0 0 0 0 0 0 0 0",
  "SWIFT,EVT_GI2DSMBW,Certificate expires in less than 30 days lsp8810a.prdipa.seb.net,Production,2,2024-05-20T09:48:37,2024-05-20T09:48:37,##__SPARKLINE__## 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 2 0 0 0 0 0 0 0 0 0 0 0 0 0",
  // 'SWIFT AMH,EVT_GIZTANBW,AMH Error - CALL lsp8809a.prdipa.seb.net /opt/app/alliance/amh2/logs/amh_application.log AMH-SWF-00240,Production,4,2024-05-20T08:24:32,2024-05-20T08:24:32,##__SPARKLINE__## 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 3 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  // 'SWIFT AMH,EVT_GIZTANBW,AMH Error - CALL lsp8810a.prdipa.seb.net /opt/app/alliance/amh2/logs/amh_application.log AMH-SWF-00240,Production,4,2024-05-20T08:24:31,2024-05-20T08:24:31,##__SPARKLINE__## 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 3 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  // 'SWIFT AMH,EVT_GIZTAMZT,AMH Error - Email /opt/app/alliance/amh2/logs/amh_application.log lsp8809a.prdipa.seb.net error_code: AMH-RMA-069,Production,4,2024-05-20T08:24:14,2024-05-20T08:24:14,##__SPARKLINE__## 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 4 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  // 'SWIFT AMH,EVT_GIZTAMZT,AMH Error - Email /opt/app/alliance/amh2/logs/amh_application.log lsp8809a.prdipa.seb.net error_code: AMH-RUL-00010,Production,4,2024-05-20T08:24:14,2024-05-20T08:24:14,##__SPARKLINE__## 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 4 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  // 'SWIFT AMH,EVT_GIZTAMZT,AMH Error - Email /opt/app/alliance/amh2/logs/amh_application.log lsp8810a.prdipa.seb.net error_code: AMH-RMA-069,Production,4,2024-05-20T08:24:14,2024-05-20T08:24:14,##__SPARKLINE__## 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 4 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  // 'SWIFT AMH,EVT_GIZTAMZT,AMH Error - Email /opt/app/alliance/amh2/logs/amh_application.log lsp8810a.prdipa.seb.net error_code: AMH-RUL-00010,Production,4,2024-05-20T08:24:14,2024-05-20T08:24:14,##__SPARKLINE__## 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 4 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  // 'SWIFT AMH,EVT_GI2DKNBQ,SVCINST_0026287,Production,4,2024-05-20T08:24:05,2024-05-20T08:24:05,##__SPARKLINE__## 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 4 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  // 'SWIFT AMH,EVT_GIZDSOBW,AMH FATAL Error lsp8810a.prdipa.seb.net /opt/app/alliance/amh2/logs/amh_swift.log,Production,10,2024-05-20T02:13:26,2024-05-20T06:53:47,##__SPARKLINE__## 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 4 0 0 0 2 0 2 0 0 2 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  // 'SWIFT AMH,EVT_GIZDSOBW,AMH FATAL Error lsp8809a.prdipa.seb.net /opt/app/alliance/amh2/logs/amh_swift.log,Production,12,2024-05-19T20:18:22,2024-05-20T05:13:20,##__SPARKLINE__## 0 0 0 0 0 0 0 0 2 0 0 0 0 0 4 0 0 0 0 0 0 0 0 0 0 2 4 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  // 'SWIFT AGI,EVT_GI2DKMBU,AGI EMAIL - unexpected number of log (source) files in Splunk on lsp8760a.prdipa.seb.net,Production,5,2024-05-19T22:36:27,2024-05-19T22:36:27,##__SPARKLINE__## 0 0 0 0 0 0 0 0 0 0 0 0 0 5 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
  // 'SWIFT AWH,EVT_GI2DKMJZ,Running process count for process /usr/bin/dockerd is less than threshold,Production,770,2024-05-19T00:30:00,2024-05-19T08:10:56,##__SPARKLINE__## 4 12 16 18 12 20 16 12 22 14 12 24 12 14 22 12 16 22 12 18 18 12 18 18 12 20 16 12 20 16 12 18 16 12 22 16 12 22 14 12 22 14 12 22 14 12 22 14 10',
  // 'SWIFT AGI,EVT_GI2DAMJW,Running process count for process /opt/sma/bin/ips_sma is less than threshold,Production,770,2024-05-19T00:23:36,2024-05-19T06:15:40,##__SPARKLINE__## 4 12 16 18 12 20 16 12 22 14 12 24 12 14 22 12 16 22 12 18 18 12 18 18 12 20 16 12 20 16 12 18 16 12 22 16 12 22 14 12 22 14 12 22 14 12 22 14 10',
  // 'SWIFT AGI,EVT_GI2DAMJX,Running process count for process /opt/lma/bin/ips_lma is less than threshold,Production,770,2024-05-19T00:23:36,2024-05-19T06:15:40,##__SPARKLINE__## 4 12 16 18 12 20 16 12 22 14 12 24 12 14 22 12 16 22 12 18 18 12 18 18 12 20 16 12 20 16 12 18 16 12 22 16 12 22 14 12 22 14 12 22 14 12 22 14 10',
  // 'SWIFT AGI,EVT_GIZTSNBZ,Running process count for process /usr/bin/dockerd is less than threshold,Production,770,2024-05-19T00:23:36,2024-05-19T06:15:40,##__SPARKLINE__## 4 12 16 18 12 20 16 12 22 14 12 24 12 14 22 12 16 22 12 18 18 12 18 18 12 20 16 12 20 16 12 18 16 12 22 16 12 22 14 12 22 14 12 22 14 12 22 14 10',
];
