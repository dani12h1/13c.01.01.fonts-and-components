import { animate, scroll, stagger, inView } from "https://cdn.skypack.dev/motion";

animate("body", { opacity: [0, 1] }, { duration: 2 });

scroll(animate(".progress", { scaleX: [0, 1] }));
