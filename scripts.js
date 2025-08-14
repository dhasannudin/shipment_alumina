        // Data trucking per hari
        const truckData = {
            day1: {
                'A9568U': { netto: 29.67, siklus: 3 },
                'B9051IB': { netto: 26.19, siklus: 1 },
                'B9222UDA': { netto: 27.02, siklus: 4 },
                'B9281GCB': { netto: 28.39, siklus: 3 },
                'B9283XA': { netto: 32.98, siklus: 3 },
                'B9284GCB': { netto: 28.4, siklus: 4 },
                'B9732UDO': { netto: 28.64, siklus: 4 },
                'B9878UFV': { netto: 21.29, siklus: 3 },
                'B9917UFV': { netto: 25.18, siklus: 5 },
                'B9925UFV': { netto: 26.21, siklus: 4 },
                'B9948UFV': { netto: 22.17, siklus: 4 },
                'B9956UFV': { netto: 24.50, siklus: 4 },
                'BE8019ABU': { netto: 22.97, siklus: 4 },
                'BE8267ACU': { netto: 24.22, siklus: 4 },
                'BE8297ACU': { netto: 26.67, siklus: 4 }
            },
            day2: {
                'A9568U': { netto: 30.92, siklus: 6 },
                'B9051IB': { netto: 27.04, siklus: 5 },
                'B9222UDA': { netto: 25.57, siklus: 7 },
                'B9281GCB': { netto: 26.60, siklus: 8 },
                'B9283XA': { netto: 30.51, siklus: 8 },
                'B9284GCB': { netto: 27.30, siklus: 6 },
                'B9732UDO': { netto: 28.18, siklus: 8 },
                'B9878UFV': { netto: 23.75, siklus: 8 },
                'B9917UFV': { netto: 24.16, siklus: 7 },
                'B9925UFV': { netto: 24.41, siklus: 8 },
                'B9948UFV': { netto: 22.12, siklus: 8 },
                'B9956UFV': { netto: 22.90, siklus: 8 },
                'BE8019ABU': { netto: 22.66, siklus: 8 },
                'BE8267ACU': { netto: 24.92, siklus: 8 },
                'BE8297ACU': { netto: 25.76, siklus: 8 }
            },
            day3: {
                'A9568U': { netto: 31.36, siklus: 6 },
                'B9051IB': { netto: 27.31, siklus: 7 },
                'B9222UDA': { netto: 26.86, siklus: 9 },
                'B9281GCB': { netto: 26.85, siklus: 7 },
                'B9283XA': { netto: 30.52, siklus: 7 },
                'B9284GCB': { netto: 26.82, siklus: 7 },
                'B9732UDO': { netto: 28.07, siklus: 7 },
                'B9878UFV': { netto: 21.73, siklus: 8 },
                'B9917UFV': { netto: 24.23, siklus: 8 },
                'B9925UFV': { netto: 24.62, siklus: 7 },
                'B9948UFV': { netto: 23.25, siklus: 7 },
                'B9956UFV': { netto: 21.39, siklus: 7 },
                'BE8019ABU': { netto: 22.22, siklus: 7 },
                'BE8267ACU': { netto: 26.03, siklus: 8 },
                'BE8297ACU': { netto: 26.19, siklus: 8 }
            },
            day4: {
                'A9568U': { netto: 31.36, siklus: 6 },
                'B9051IB': { netto: 27.31, siklus: 7 },
                'B9222UDA': { netto: 26.86, siklus: 9 },
                'B9281GCB': { netto: 26.85, siklus: 7 },
                'B9283XA': { netto: 30.52, siklus: 7 },
                'B9284GCB': { netto: 26.82, siklus: 7 },
                'B9732UDO': { netto: 28.07, siklus: 7 },
                'B9878UFV': { netto: 21.73, siklus: 8 },
                'B9917UFV': { netto: 24.23, siklus: 8 },
                'B9925UFV': { netto: 24.62, siklus: 7 },
                'B9948UFV': { netto: 23.25, siklus: 7 },
                'B9956UFV': { netto: 21.39, siklus: 7 },
                'BE8019ABU': { netto: 22.22, siklus: 7 },
                'BE8267ACU': { netto: 26.03, siklus: 8 },
                'BE8297ACU': { netto: 26.19, siklus: 8 }
            },
            day5: {
                'A9568U': { netto: 31.09, siklus: 5 },
                'B9051IB': { netto: 27.01, siklus: 8 },
                'B9222UDA': { netto: 26.69, siklus: 7 },
                'B9283XA': { netto: 29.17, siklus: 8 },
                'B9284GCB': { netto: 26.81, siklus: 7 },
                'B9732UDO': { netto: 28.92, siklus: 4 },
                'B9878UFV': { netto: 21.67, siklus: 8 },
                'B9917UFV': { netto: 23.08, siklus: 8 },
                'B9925UFV': { netto: 24.01, siklus: 8 },
                'B9948UFV': { netto: 21.35, siklus: 7 },
                'B9956UFV': { netto: 21.61, siklus: 7 },
                'BE8019ABU': { netto: 21.59, siklus: 7 },
                'BE8267ACU': { netto: 25.27, siklus: 8 },
                'BE8297ACU': { netto: 25.43, siklus: 9 }
            },
            day6: {
                'A9568U': { netto: 28.35, siklus: 4 },
                'B9051IB': { netto: 27.30, siklus: 6 },
                'B9222UDA': { netto: 27.88, siklus: 5 },
                'B9283XA': { netto: 30.17, siklus: 4 },
                'B9284GCB': { netto: 26.47, siklus: 6 },
                'B9732UDO': { netto: 27.11, siklus: 7 },
                'B9878UFV': { netto: 19.40, siklus: 8 },
                'B9917UFV': { netto: 23.07, siklus: 6 },
                'B9925UFV': { netto: 21.84, siklus: 5 },
                'B9939BDH': { netto: 27.56, siklus: 7 },
                'B9948UFV': { netto: 23.03, siklus: 6 },
                'B9956UFV': { netto: 23.06, siklus: 4 },
                'BA8782RO': { netto: 14.58, siklus: 1 },
                'BA8785RO': { netto: 22.49, siklus: 1 },
                'BE8019ABU': { netto: 22.51, siklus: 7 },
                'BE8267ACU': { netto: 25.04, siklus: 8 },
                'BE8297ACU': { netto: 24.86, siklus: 6 }
            }
        };

        // Operational data
        const operationalData = [
            { day: '20 Juli', produksi: 2037, target: 3360, ritase: 79, targetRitase: 112, produktivitas: 407, targetProduktivitas: 672, kapasitas: 26.15, trip: 3.60 },
            { day: '21 Juli', produksi: 2940, target: 3360, ritase: 111, targetRitase: 112, produktivitas: 588, targetProduktivitas: 672, kapasitas: 25.64, trip: 7.40 },
            { day: '22 Juli', produksi: 2846, target: 3360, ritase: 110, targetRitase: 112, produktivitas: 569, targetProduktivitas: 672, kapasitas: 25.75, trip: 7.30 },
            { day: '23 Juli', produksi: 2749, target: 3360, ritase: 113, targetRitase: 112, produktivitas: 550, targetProduktivitas: 672, kapasitas: 26.10, trip: 7.50 },
            { day: '24 Juli', produksi: 2503, target: 3360, ritase: 101, targetRitase: 112, produktivitas: 501, targetProduktivitas: 672, kapasitas: 25.92, trip: 7.20 },
            { day: '25 Juli', produksi: 1749, target: 3360, ritase: 91, targetRitase: 112, produktivitas: 350, targetProduktivitas: 672, kapasitas: 24.79, trip: 5.30 }
        ];

        // Drilling Operations Data
        const allDrillingData = [
            {plat_no: "A9568U", netto: 30.62, siklus: 31, gate_to_plug: "0:40:45", proses_plugging: "0:05:25", naik_pressure: "0:05:25", durasi_muat: "0:35:50", proses_unplugging: "0:05:04", unplugging_to_gateout: "0:12:19", port_operation: "1:56:27", silo_to_port: "2:09:34"},
    {plat_no: "B9051IB", netto: 27.36, siklus: 34, gate_to_plug: "0:46:18", proses_plugging: "0:11:11", naik_pressure: "0:06:51", durasi_muat: "0:36:25", proses_unplugging: "0:03:56", unplugging_to_gateout: "0:15:37", port_operation: "2:07:41", silo_to_port: "1:37:48"},
    {plat_no: "B9222UDA", netto: 26.92, siklus: 40, gate_to_plug: "0:54:08", proses_plugging: "0:12:05", naik_pressure: "0:04:35", durasi_muat: "1:02:56", proses_unplugging: "0:02:57", unplugging_to_gateout: "0:10:02", port_operation: "2:04:54", silo_to_port: "1:08:29"},
    {plat_no: "B9281GCB", netto: 27.35, siklus: 21, gate_to_plug: "0:35:03", proses_plugging: "0:04:17", naik_pressure: "0:03:26", durasi_muat: "0:46:09", proses_unplugging: "0:03:11", unplugging_to_gateout: "0:15:06", port_operation: "2:21:29", silo_to_port: "1:09:37"},
    {plat_no: "B9283XA", netto: 30.33, siklus: 36, gate_to_plug: "0:45:17", proses_plugging: "0:10:03", naik_pressure: "0:03:07", durasi_muat: "0:43:13", proses_unplugging: "0:05:57", unplugging_to_gateout: "0:10:35", port_operation: "2:07:40", silo_to_port: "1:19:48"},
    {plat_no: "B9284GCB", netto: 27.13, siklus: 39, gate_to_plug: "0:45:31", proses_plugging: "0:03:06", naik_pressure: "0:02:52", durasi_muat: "0:27:12", proses_unplugging: "0:02:57", unplugging_to_gateout: "0:21:40", port_operation: "1:55:35", silo_to_port: "1:22:32"},
    {plat_no: "B9732UDO", netto: 28.09, siklus: 38, gate_to_plug: "0:48:19", proses_plugging: "0:12:03", naik_pressure: "0:05:47", durasi_muat: "0:37:02", proses_unplugging: "0:03:00", unplugging_to_gateout: "0:17:11", port_operation: "2:05:51", silo_to_port: "1:22:13"},
    {plat_no: "B9878UFV", netto: 21.96, siklus: 44, gate_to_plug: "0:44:48", proses_plugging: "0:04:33", naik_pressure: "0:03:19", durasi_muat: "0:36:56", proses_unplugging: "0:03:03", unplugging_to_gateout: "0:09:52", port_operation: "1:46:25", silo_to_port: "1:07:16"},
    {plat_no: "B9917UFV", netto: 23.90, siklus: 41, gate_to_plug: "0:45:13", proses_plugging: "0:04:03", naik_pressure: "0:05:09", durasi_muat: "0:54:34", proses_unplugging: "0:06:26", unplugging_to_gateout: "0:07:51", port_operation: "2:03:18", silo_to_port: "1:06:32"},
    {plat_no: "B9925UFV", netto: 24.31, siklus: 41, gate_to_plug: "0:45:35", proses_plugging: "0:02:44", naik_pressure: "0:03:04", durasi_muat: "0:46:53", proses_unplugging: "0:03:01", unplugging_to_gateout: "0:11:12", port_operation: "2:02:53", silo_to_port: "1:07:40"},
    {plat_no: "B9939BDH", netto: 27.56, siklus: 7, gate_to_plug: "0:40:17", proses_plugging: "0:02:26", naik_pressure: "0:04:17", durasi_muat: "0:41:09", proses_unplugging: "0:03:43", unplugging_to_gateout: "0:11:00", port_operation: "1:42:51", silo_to_port: "0:59:34"},
    {plat_no: "B9948UFV", netto: 22.32, siklus: 41, gate_to_plug: "0:57:45", proses_plugging: "0:07:28", naik_pressure: "0:02:59", durasi_muat: "0:38:38", proses_unplugging: "0:02:40", unplugging_to_gateout: "0:08:48", port_operation: "1:59:47", silo_to_port: "1:07:12"},
    {plat_no: "B9956UFV", netto: 22.58, siklus: 38, gate_to_plug: "0:57:00", proses_plugging: "0:08:17", naik_pressure: "0:03:28", durasi_muat: "0:40:39", proses_unplugging: "0:03:52", unplugging_to_gateout: "0:08:08", port_operation: "2:17:57", silo_to_port: "1:04:51"},
    {plat_no: "BA8782RO", netto: 14.58, siklus: 1, gate_to_plug: "0:19:00", proses_plugging: "0:02:00", naik_pressure: "0:22:00", durasi_muat: "0:27:00", proses_unplugging: "0:13:00", unplugging_to_gateout: "0:18:00", port_operation: "1:41:00", silo_to_port: "0:00:00"},
    {plat_no: "BA8785RO", netto: 22.49, siklus: 1, gate_to_plug: "0:14:00", proses_plugging: "0:03:00", naik_pressure: "0:02:00", durasi_muat: "1:02:00", proses_unplugging: "0:06:00", unplugging_to_gateout: "1:00:00", port_operation: "2:27:00", silo_to_port: "0:00:00"},
    {plat_no: "BE8019ABU", netto: 22.53, siklus: 40, gate_to_plug: "0:50:23", proses_plugging: "0:13:06", naik_pressure: "0:03:26", durasi_muat: "0:42:26", proses_unplugging: "0:06:03", unplugging_to_gateout: "0:11:48", port_operation: "2:13:21", silo_to_port: "1:09:59"},
    {plat_no: "BE8267ACU", netto: 25.44, siklus: 44, gate_to_plug: "0:48:37", proses_plugging: "0:08:44", naik_pressure: "0:04:34", durasi_muat: "0:39:29", proses_unplugging: "0:03:40", unplugging_to_gateout: "0:08:00", port_operation: "2:02:05", silo_to_port: "1:01:16"},
    {plat_no: "BE8297ACU", netto: 25.86, siklus: 43, gate_to_plug: "0:48:13", proses_plugging: "0:08:21", naik_pressure: "0:03:04", durasi_muat: "0:43:17", proses_unplugging: "0:03:13", unplugging_to_gateout: "0:11:45", port_operation: "2:00:10", silo_to_port: "1:02:52"}
];

        const boosterDrillingData = [
    {plat_no: "A9568U", netto: 30.69, siklus: 16, gate_to_plug: "0:28:15", proses_plugging: "0:04:08", naik_pressure: "0:05:31", durasi_muat: "0:34:00", proses_unplugging: "0:06:11", unplugging_to_gateout: "0:10:15", port_operation: "1:52:08", silo_to_port: "1:57:04"},
    {plat_no: "B9051IB", netto: 27.36, siklus: 34, gate_to_plug: "0:46:18", proses_plugging: "0:11:11", naik_pressure: "0:06:51", durasi_muat: "0:36:25", proses_unplugging: "0:03:56", unplugging_to_gateout: "0:15:37", port_operation: "2:07:41", silo_to_port: "1:37:48"},
    {plat_no: "B9222UDA", netto: 26.84, siklus: 39, gate_to_plug: "0:54:45", proses_plugging: "0:12:20", naik_pressure: "0:04:38", durasi_muat: "1:03:11", proses_unplugging: "0:02:52", unplugging_to_gateout: "0:10:09", port_operation: "2:05:35", silo_to_port: "1:09:22"},
    {plat_no: "B9281GCB", netto: 27.49, siklus: 19, gate_to_plug: "0:37:13", proses_plugging: "0:04:22", naik_pressure: "0:03:47", durasi_muat: "0:46:44", proses_unplugging: "0:03:16", unplugging_to_gateout: "0:16:06", port_operation: "2:29:22", silo_to_port: "1:12:41"},
    {plat_no: "B9283XA", netto: 29.77, siklus: 17, gate_to_plug: "0:34:53", proses_plugging: "0:13:56", naik_pressure: "0:03:00", durasi_muat: "0:45:07", proses_unplugging: "0:05:18", unplugging_to_gateout: "0:11:46", port_operation: "2:07:21", silo_to_port: "1:27:11"},
    {plat_no: "B9284GCB", netto: 27.13, siklus: 39, gate_to_plug: "0:45:31", proses_plugging: "0:03:06", naik_pressure: "0:02:52", durasi_muat: "0:27:12", proses_unplugging: "0:02:57", unplugging_to_gateout: "0:21:40", port_operation: "1:55:35", silo_to_port: "1:22:32"},
    {plat_no: "B9732UDO", netto: 28.04, siklus: 37, gate_to_plug: "0:48:52", proses_plugging: "0:12:18", naik_pressure: "0:05:55", durasi_muat: "0:37:45", proses_unplugging: "0:03:05", unplugging_to_gateout: "0:15:41", port_operation: "2:06:16", silo_to_port: "1:23:03"},
    {plat_no: "B9878UFV", netto: 21.76, siklus: 32, gate_to_plug: "0:37:30", proses_plugging: "0:04:41", naik_pressure: "0:03:36", durasi_muat: "0:35:02", proses_unplugging: "0:03:08", unplugging_to_gateout: "0:08:24", port_operation: "1:37:53", silo_to_port: "1:05:30"},
    {plat_no: "B9917UFV", netto: 23.85, siklus: 27, gate_to_plug: "0:51:11", proses_plugging: "0:04:20", naik_pressure: "0:03:16", durasi_muat: "0:56:18", proses_unplugging: "0:08:40", unplugging_to_gateout: "0:07:44", port_operation: "2:11:49", silo_to_port: "1:04:47"},
    {plat_no: "B9925UFV", netto: 23.82, siklus: 25, gate_to_plug: "0:38:02", proses_plugging: "0:02:34", naik_pressure: "0:03:02", durasi_muat: "0:42:58", proses_unplugging: "0:02:53", unplugging_to_gateout: "0:11:41", port_operation: "1:58:24", silo_to_port: "1:04:19"},
    {plat_no: "B9939BDH", netto: 27.56, siklus: 7, gate_to_plug: "0:40:17", proses_plugging: "0:02:26", naik_pressure: "0:04:17", durasi_muat: "0:41:09", proses_unplugging: "0:03:43", unplugging_to_gateout: "0:11:00", port_operation: "1:42:51", silo_to_port: "0:59:34"},
    {plat_no: "B9948UFV", netto: 22.38, siklus: 28, gate_to_plug: "0:55:00", proses_plugging: "0:03:56", naik_pressure: "0:02:54", durasi_muat: "0:39:21", proses_unplugging: "0:02:56", unplugging_to_gateout: "0:08:39", port_operation: "1:55:17", silo_to_port: "1:10:17"},
    {plat_no: "B9956UFV", netto: 22.15, siklus: 26, gate_to_plug: "0:50:18", proses_plugging: "0:09:39", naik_pressure: "0:04:09", durasi_muat: "0:41:53", proses_unplugging: "0:03:53", unplugging_to_gateout: "0:09:48", port_operation: "2:14:51", silo_to_port: "0:57:53"},
    {plat_no: "BA8782RO", netto: 14.58, siklus: 1, gate_to_plug: "0:19:00", proses_plugging: "0:02:00", naik_pressure: "0:22:00", durasi_muat: "0:27:00", proses_unplugging: "0:13:00", unplugging_to_gateout: "0:18:00", port_operation: "1:41:00", silo_to_port: "0"},
    {plat_no: "BA8785RO", netto: 22.49, siklus: 1, gate_to_plug: "0:14:00", proses_plugging: "0:03:00", naik_pressure: "0:02:00", durasi_muat: "1:02:00", proses_unplugging: "0:06:00", unplugging_to_gateout: "1:00:00", port_operation: "2:27:00", silo_to_port: "0"},
    {plat_no: "BE8019ABU", netto: 22.24, siklus: 28, gate_to_plug: "0:41:06", proses_plugging: "0:08:39", naik_pressure: "0:03:36", durasi_muat: "0:43:02", proses_unplugging: "0:05:15", unplugging_to_gateout: "0:12:36", port_operation: "2:03:34", silo_to_port: "1:14:54"},
    {plat_no: "BE8267ACU", netto: 25.66, siklus: 35, gate_to_plug: "0:43:19", proses_plugging: "0:10:19", naik_pressure: "0:05:02", durasi_muat: "0:41:09", proses_unplugging: "0:04:09", unplugging_to_gateout: "0:08:34", port_operation: "2:01:27", silo_to_port: "1:05:02"},
    {plat_no: "BE8297ACU", netto: 25.91, siklus: 36, gate_to_plug: "0:44:52", proses_plugging: "0:09:23", naik_pressure: "0:02:38", durasi_muat: "0:44:30", proses_unplugging: "0:03:20", unplugging_to_gateout: "0:12:27", port_operation: "1:59:55", silo_to_port: "1:01:22"},
    
];

        const nonBoosterDrillingData = [
    {plat_no: "A9568U", netto: 30.54, siklus: 15, gate_to_plug: "0:54:04", proses_plugging: "0:06:48", naik_pressure: "0:05:20", durasi_muat: "0:37:48", proses_unplugging: "0:03:52", unplugging_to_gateout: "0:14:32", port_operation: "2:01:04", silo_to_port: "2:23:51"},
    {plat_no: "B9222UDA", netto: 30.00, siklus: 1, gate_to_plug: "0:30:00", proses_plugging: "0:02:00", naik_pressure: "0:02:00", durasi_muat: "0:53:00", proses_unplugging: "0:06:00", unplugging_to_gateout: "0:05:00", port_operation: "1:38:00", silo_to_port: "0:34:00"},
    {plat_no: "B9281GCB", netto: 25.98, siklus: 2, gate_to_plug: "0:14:30", proses_plugging: "0:03:30", naik_pressure: "0:00:00", durasi_muat: "0:40:30", proses_unplugging: "0:02:30", unplugging_to_gateout: "0:05:30", port_operation: "1:06:30", silo_to_port: "0:40:30"},
    {plat_no: "B9283XA", netto: 30.83, siklus: 19, gate_to_plug: "0:54:35", proses_plugging: "0:06:35", naik_pressure: "0:03:13", durasi_muat: "0:41:32", proses_unplugging: "0:06:32", unplugging_to_gateout: "0:09:32", port_operation: "2:07:57", silo_to_port: "1:13:13"},
    {plat_no: "B9732UDO", netto: 29.90, siklus: 1, gate_to_plug: "0:28:00", proses_plugging: "0:03:00", naik_pressure: "0:01:00", durasi_muat: "0:10:00", proses_unplugging: "0:00:00", unplugging_to_gateout: "1:13:00", port_operation: "1:50:00", silo_to_port: "0:51:00"},
    {plat_no: "B9878UFV", netto: 22.49, siklus: 12, gate_to_plug: "1:04:15", proses_plugging: "0:04:10", naik_pressure: "0:02:35", durasi_muat: "0:42:00", proses_unplugging: "0:02:50", unplugging_to_gateout: "0:13:45", port_operation: "2:09:10", silo_to_port: "1:12:00"},
    {plat_no: "B9917UFV", netto: 23.99, siklus: 14, gate_to_plug: "0:33:43", proses_plugging: "0:03:30", naik_pressure: "0:08:47", durasi_muat: "0:51:13", proses_unplugging: "0:02:09", unplugging_to_gateout: "0:08:04", port_operation: "1:46:51", silo_to_port: "1:09:56"},
    {plat_no: "B9925UFV", netto: 25.08, siklus: 16, gate_to_plug: "0:57:23", proses_plugging: "0:03:00", naik_pressure: "0:03:08", durasi_muat: "0:53:00", proses_unplugging: "0:03:15", unplugging_to_gateout: "0:10:26", port_operation: "2:09:53", silo_to_port: "1:12:53"},
    {plat_no: "B9948UFV", netto: 22.20, siklus: 13, gate_to_plug: "1:03:42", proses_plugging: "0:15:05", naik_pressure: "0:03:09", durasi_muat: "0:37:05", proses_unplugging: "0:02:05", unplugging_to_gateout: "0:09:09", port_operation: "2:09:28", silo_to_port: "1:00:32"},
    {plat_no: "B9956UFV", netto: 23.51, siklus: 12, gate_to_plug: "1:11:30", proses_plugging: "0:05:20", naik_pressure: "0:02:00", durasi_muat: "0:38:00", proses_unplugging: "0:03:50", unplugging_to_gateout: "0:04:30", port_operation: "2:24:40", silo_to_port: "1:19:55"},
    {plat_no: "BE8019ABU", netto: 23.21, siklus: 12, gate_to_plug: "1:12:00", proses_plugging: "0:23:30", naik_pressure: "0:03:00", durasi_muat: "0:41:00", proses_unplugging: "0:07:55", unplugging_to_gateout: "0:09:55", port_operation: "2:36:10", silo_to_port: "0:58:30"},
    {plat_no: "BE8267ACU", netto: 24.60, siklus: 9, gate_to_plug: "1:09:13", proses_plugging: "0:02:33", naik_pressure: "0:02:47", durasi_muat: "0:33:00", proses_unplugging: "0:01:47", unplugging_to_gateout: "0:05:47", port_operation: "2:04:33", silo_to_port: "0:46:40"},
    {plat_no: "BE8297ACU", netto: 25.64, siklus: 7, gate_to_plug: "1:05:26", proses_plugging: "0:03:00", naik_pressure: "0:05:17", durasi_muat: "0:37:00", proses_unplugging: "0:02:34", unplugging_to_gateout: "0:08:09", port_operation: "2:01:26", silo_to_port: "1:10:34"},
    ];

        let currentDrillingFilter = 'all';
        let currentDrillingData = allDrillingData;

        // Calculate truck averages
        function calculateTruckAverages() {
            const allTrucks = new Set();
            Object.values(truckData).forEach(day => {
                Object.keys(day).forEach(truck => allTrucks.add(truck));
            });

            const truckAverages = [];
            allTrucks.forEach(truckId => {
                let totalNetto = 0;
                let totalSiklus = 0;
                let dayCount = 0;
                
                Object.values(truckData).forEach(day => {
                    if (day[truckId]) {
                        totalNetto += day[truckId].netto;
                        totalSiklus += day[truckId].siklus;
                        dayCount++;
                    }
                });

                if (dayCount > 0) {
                    truckAverages.push({
                        id: truckId,
                        avgNetto: totalNetto / dayCount,
                        totalSiklus: totalSiklus,
                        avgSiklus: totalSiklus / dayCount,
                        dayCount: dayCount
                    });
                }
            });

            return truckAverages.sort((a, b) => b.avgNetto - a.avgNetto);
        }

        // Initialize charts
        function initCharts() {
            // Produksi Chart
            const produksiCtx = document.getElementById('produksiChart').getContext('2d');
            new Chart(produksiCtx, {
                type: 'bar',
                data: {
                    labels: operationalData.map(d => d.day),
                    datasets: [
                        {
                            label: 'Target',
                            data: operationalData.map(d => d.target),
                            backgroundColor: 'rgba(148, 163, 184, 0.6)',
                            borderColor: 'rgba(148, 163, 184, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Realisasi',
                            data: operationalData.map(d => d.produksi),
                            backgroundColor: 'rgba(16, 185, 129, 0.6)',
                            borderColor: 'rgba(16, 185, 129, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Produksi (TSD)'
                            }
                        }
                    }
                }
            });

            // Ritase Chart
            const ritaseCtx = document.getElementById('ritaseChart').getContext('2d');
            new Chart(ritaseCtx, {
                type: 'line',
                data: {
                    labels: operationalData.map(d => d.day),
                    datasets: [
                        {
                            label: 'Target',
                            data: operationalData.map(d => d.targetRitase),
                            borderColor: 'rgba(148, 163, 184, 1)',
                            backgroundColor: 'rgba(148, 163, 184, 0.1)',
                            borderDash: [5, 5],
                            fill: false
                        },
                        {
                            label: 'Realisasi',
                            data: operationalData.map(d => d.ritase),
                            borderColor: 'rgba(59, 130, 246, 1)',
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            fill: false,
                            tension: 0.4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Ritase'
                            }
                        }
                    }
                }
            });

            // Produktivitas Chart
            const produktivitasCtx = document.getElementById('produktivitasChart').getContext('2d');
            new Chart(produktivitasCtx, {
                type: 'line',
                data: {
                    labels: operationalData.map(d => d.day),
                    datasets: [
                        {
                            label: 'Target',
                            data: operationalData.map(d => d.targetProduktivitas),
                            borderColor: 'rgba(245, 158, 11, 1)',
                            backgroundColor: 'rgba(245, 158, 11, 0.1)',
                            borderDash: [5, 5],
                            fill: false
                        },
                        {
                            label: 'Realisasi',
                            data: operationalData.map(d => d.produktivitas),
                            borderColor: 'rgba(239, 68, 68, 1)',
                            backgroundColor: 'rgba(239, 68, 68, 0.1)',
                            fill: false,
                            tension: 0.4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Produktivitas (MT)'
                            }
                        }
                    }
                }
            });

            // Kapasitas Chart
            const kapasitasCtx = document.getElementById('kapasitasChart').getContext('2d');
            new Chart(kapasitasCtx, {
                type: 'bar',
                data: {
                    labels: operationalData.map(d => d.day),
                    datasets: [
                        {
                            label: 'Kapasitas (Ton)',
                            data: operationalData.map(d => d.kapasitas),
                            backgroundColor: 'rgba(139, 69, 195, 0.6)',
                            borderColor: 'rgba(139, 69, 195, 1)',
                            borderWidth: 1,
                            yAxisID: 'y'
                        },
                        {
                            label: 'Trip/Day',
                            data: operationalData.map(d => d.trip),
                            type: 'line',
                            borderColor: 'rgba(34, 197, 94, 1)',
                            backgroundColor: 'rgba(34, 197, 94, 0.1)',
                            yAxisID: 'y1',
                            tension: 0.4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'linear',
                            display: true,
                            position: 'left',
                            title: {
                                display: true,
                                text: 'Kapasitas (Ton)'
                            }
                        },
                        y1: {
                            type: 'linear',
                            display: true,
                            position: 'right',
                            title: {
                                display: true,
                                text: 'Trip/Day'
                            },
                            grid: {
                                drawOnChartArea: false,
                            },
                        }
                    }
                }
            });

            // Truck Performance Chart
            const truckAverages = calculateTruckAverages().slice(0, 10);
            const truckCtx = document.getElementById('truckChart').getContext('2d');
            new Chart(truckCtx, {
                type: 'bar',
                data: {
                    labels: truckAverages.map(t => t.id),
                    datasets: [
                        {
                            label: 'Average Netto (Ton)',
                            data: truckAverages.map(t => t.avgNetto),
                            backgroundColor: 'rgba(16, 185, 129, 0.6)',
                            borderColor: 'rgba(16, 185, 129, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Average Netto (Ton)'
                            }
                        }
                    }
                }
            });
        }

        // Generate truck table
        function generateTruckTable() {
            const truckAverages = calculateTruckAverages();
            const tbody = document.getElementById('truckTableBody');
            
            truckAverages.forEach(truck => {
                const row = tbody.insertRow();
                
                // Truck ID
                const cellId = row.insertCell();
                cellId.innerHTML = `<span class="truck-id">${truck.id}</span>`;
                
                // Daily data
                Object.keys(truckData).forEach(dayKey => {
                    const cell = row.insertCell();
                    const dayData = truckData[dayKey][truck.id];
                    if (dayData) {
                        const performanceClass = dayData.netto > 28 ? 'performance-good' : 
                                              dayData.netto > 25 ? 'performance-average' : 'performance-poor';
                        cell.innerHTML = `<div class="${performanceClass}">${dayData.netto.toFixed(1)}</div><small>${dayData.siklus} siklus</small>`;
                    } else {
                        cell.innerHTML = '<span style="color: #94a3b8;">-</span>';
                    }
                });
                
                // Average Netto
                const cellAvg = row.insertCell();
                const avgClass = truck.avgNetto > 28 ? 'performance-good' : 
                               truck.avgNetto > 25 ? 'performance-average' : 'performance-poor';
                cellAvg.innerHTML = `<strong class="${avgClass}">${truck.avgNetto.toFixed(2)}</strong>`;
                
                // Total Siklus
                const cellTotal = row.insertCell();
                cellTotal.innerHTML = `<strong>${truck.totalSiklus}</strong>`;
            });
        }
      
      
    // Update drilling stats - PERBAIKAN
function updateDrillingStats() {
    const totalPlatforms = currentDrillingData.length;
    const totalCycles = currentDrillingData.reduce((sum, row) => sum + row.siklus, 0);
    
    // Hitung weighted average netto berdasarkan siklus (sama seperti di tabel)
    const totalNetto = currentDrillingData.reduce((sum, row) => sum + (row.netto * row.siklus), 0);
    const avgNetto = totalCycles > 0 ? (totalNetto / totalCycles).toFixed(2) : 0;
    
    document.getElementById('drillingTotalPlatforms').textContent = totalPlatforms;
    document.getElementById('drillingTotalCycles').textContent = totalCycles;
    document.getElementById('drillingAvgNetto').textContent = avgNetto;
    document.getElementById('drillingCurrentFilter').textContent = 
        currentDrillingFilter === 'all' ? 'All' : 
        currentDrillingFilter === 'booster' ? 'Booster' : 'Non Booster';
  
    
}
      
     

// Filter drilling data
function filterDrillingData(type) {
    // Update active button
    document.querySelectorAll('.drilling-filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Find and activate the clicked button
    const buttons = document.querySelectorAll('.drilling-filter-btn');
    buttons.forEach(btn => {
        if ((type === 'all' && btn.textContent === 'All') ||
            (type === 'booster' && btn.textContent === 'Booster') ||
            (type === 'non-booster' && btn.textContent === 'Non Booster')) {
            btn.classList.add('active');
        }
    });

    // Set current filter and data
    currentDrillingFilter = type;
    if (type === 'all') {
        currentDrillingData = allDrillingData;
    } else if (type === 'booster') {
        currentDrillingData = boosterDrillingData;
    } else {
        currentDrillingData = nonBoosterDrillingData;
    }

    // Update table and stats
    generateDrillingTable();
    updateDrillingStats(); // Pastikan ini dipanggil
}
      
      // Fungsi untuk mengkonversi waktu HH:MM:SS ke detik
function timeToSeconds(timeStr) {
    if (!timeStr || timeStr === '0') return 0;
    const parts = timeStr.split(':');
    return (+parts[0]) * 3600 + (+parts[1]) * 60 + (+parts[2] || 0);
}

// Fungsi untuk mengkonversi detik ke format HH:MM:SS
function secondsToTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

       // Generate drilling operations table
function generateDrillingTable() {
    const tbody = document.getElementById('drillingTableBody');
    tbody.innerHTML = '';

    // Add data rows
    currentDrillingData.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="plat-no">${row.plat_no}</td>
            <td>${row.netto.toFixed(2)}</td>
            <td>${row.siklus}</td>
            <td>${row.gate_to_plug}</td>
            <td>${row.proses_plugging}</td>
            <td>${row.naik_pressure}</td>
            <td>${row.durasi_muat}</td>
            <td>${row.proses_unplugging}</td>
            <td>${row.unplugging_to_gateout}</td>
            <td>${row.port_operation}</td>
            <td>${row.silo_to_port}</td>
        `;
        tbody.appendChild(tr);
    });

    // Calculate averages - PERBAIKAN
    if (currentDrillingData.length > 0) {
        // Hitung total siklus (ritase)
        const totalSiklus = currentDrillingData.reduce((sum, row) => sum + row.siklus, 0);
        
        // Hitung rata-rata netto berbobot (dikali siklus)
        const totalNetto = currentDrillingData.reduce((sum, row) => sum + (row.netto * row.siklus), 0);
        const avgNetto = totalNetto / totalSiklus;
        
        // Hitung rata-rata waktu berbobot
        const timeFields = [
            'gate_to_plug', 'proses_plugging', 'naik_pressure', 
            'durasi_muat', 'proses_unplugging', 'unplugging_to_gateout',
            'port_operation', 'silo_to_port'
        ];
        
        const avgTimes = {};
        timeFields.forEach(field => {
            let totalSeconds = 0;
            currentDrillingData.forEach(row => {
                const timeInSeconds = timeToSeconds(row[field]);
                totalSeconds += timeInSeconds * row.siklus; // Kalikan dengan jumlah siklus
            });
            avgTimes[field] = secondsToTime(Math.round(totalSeconds / totalSiklus));
        });

        // Add average row
        const avgRow = document.createElement('tr');
        avgRow.className = 'average-row';
        avgRow.innerHTML = `
            <td><strong>Average</strong></td>
            <td><strong>${avgNetto.toFixed(2)}</strong></td>
            <td><strong>${totalSiklus}</strong></td>
            <td><strong>${avgTimes.gate_to_plug}</strong></td>
            <td><strong>${avgTimes.proses_plugging}</strong></td>
            <td><strong>${avgTimes.naik_pressure}</strong></td>
            <td><strong>${avgTimes.durasi_muat}</strong></td>
            <td><strong>${avgTimes.proses_unplugging}</strong></td>
            <td><strong>${avgTimes.unplugging_to_gateout}</strong></td>
            <td><strong>${avgTimes.port_operation}</strong></td>
            <td><strong>${avgTimes.silo_to_port}</strong></td>
        `;
        tbody.appendChild(avgRow);
    }

        
        }

        // Tab functionality
        function showTab(tabName) {
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Remove active class from all buttons
            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Show selected tab
            document.getElementById(tabName).classList.add('active');
            
            // Add active class to clicked button
            event.target.classList.add('active');
        }

      
      
        // Initialize everything when page loads
        document.addEventListener('DOMContentLoaded', function() {
    initCharts();
    generateTruckTable();
    generateDrillingTable();
    updateDrillingStats(); // Tambahkan ini
});
