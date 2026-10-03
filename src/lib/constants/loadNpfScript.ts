let npfLoadingPromise: Promise<void> | null = null;

export function loadNpfScript(): Promise<void> {
    if (typeof window === "undefined") return Promise.resolve();

    // If already loaded and initialized on window
    if ((window as any).NpfWidgetsInit) {
        return Promise.resolve();
    }

    // If already in-flight, return the shared promise
    if (npfLoadingPromise) {
        return npfLoadingPromise;
    }

    npfLoadingPromise = new Promise<void>((resolve, reject) => {
        const waitForInit = (maxAttempts = 50) => {
            let attempts = 0;
            const interval = setInterval(() => {
                attempts++;
                if ((window as any).NpfWidgetsInit) {
                    clearInterval(interval);
                    resolve();
                } else if (attempts >= maxAttempts) {
                    clearInterval(interval);
                    resolve(); // Resolve to let callers safely check or gracefully fallback
                }
            }, 50);
        };

        const existingScript = document.getElementById(
            "npf-popup-script"
        ) as HTMLScriptElement | null;
        if (existingScript) {
            if ((window as any).NpfWidgetsInit) {
                resolve();
            } else {
                existingScript.addEventListener("load", () => waitForInit());
                waitForInit();
            }
            return;
        }

        const script = document.createElement("script");
        script.id = "npf-popup-script";
        script.src = "https://cdn.npfs.co/js/widget/npfwpopup.js";
        script.async = true;
        script.onload = () => {
            waitForInit();
        };
        script.onerror = (err) => {
            npfLoadingPromise = null;
            reject(err);
        };

        document.body.appendChild(script);
    });

    return npfLoadingPromise;
}
