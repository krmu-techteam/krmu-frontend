import { test, expect } from "@playwright/test";

test.describe("SOET Programs Alt Tag E2E Tests", () => {
    test("B.Tech CSE should render exact recommended alt tags across all sections", async ({
        page,
    }) => {
        await page.goto("/programs/b-tech-cse", {
            waitUntil: "domcontentloaded",
        });

        // 1. Programme Highlights
        const highlightImg = page.locator(
            'img[alt="B.Tech CSE Industry-integrated curriculum"]'
        );
        await expect(highlightImg.first()).toBeAttached();

        // 2. Specialisations
        const aiMlImg = page.locator('img[alt="B.Tech CSE in AI and ML"]');
        await expect(aiMlImg.first()).toBeAttached();

        const fullStackImg = page.locator(
            'img[alt="B.Tech CSE in Full Stack Development"]'
        );
        await expect(fullStackImg.first()).toBeAttached();

        // 3. Admission Process
        const admissionImg = page.locator('img[alt="KRMU admission process"]');
        await expect(admissionImg.first()).toBeAttached();

        // 4. Lab Facilities
        const labImg = page.locator(
            'img[alt="Computer Labs icon – modern, well-equipped labs for hands-on coding and security-based simulations"]'
        );
        await expect(labImg.first()).toBeAttached();

        // 5. Career Prospects
        const careerImg = page.locator(
            'img[alt="Career prospects for B.Tech CSE graduates"]'
        );
        await expect(careerImg.first()).toBeAttached();

        // 6. Financial Assistance Partner Logos
        const idfcImg = page.locator(
            'img[alt="IDFC – education loan partner"]'
        );
        await expect(idfcImg.first()).toBeAttached();

        const grayquestImg = page.locator(
            'img[alt="Grayquest – education loan partner"]'
        );
        await expect(grayquestImg.first()).toBeAttached();

        // 7. Our Location & Map
        const locationImg = page.locator(
            'img[alt="Cyber City Gurgaon – KRMU campus location"]'
        );
        await expect(locationImg.first()).toBeAttached();

        const mapImg = page.locator(
            'img[alt="Map showing KRMU campus on Sohna Road Gurugram"]'
        );
        await expect(mapImg.first()).toBeAttached();
    });

    test("BCA Cyber Security should render recommended alt tags", async ({
        page,
    }) => {
        await page.goto("/programs/bca-cyber-security", {
            waitUntil: "domcontentloaded",
        });

        // 1. Lab Facilities Computer Labs Icon
        const labImg = page.locator(
            'img[alt="Computer Labs icon – modern, well-equipped labs for hands-on coding and security-based simulations"]'
        );
        await expect(labImg.first()).toBeAttached();

        // 2. Programme Highlights
        const highlightImg = page.locator(
            'img[alt="BCA Cyber Security key feature – students earn 15% credits via internships and projects, graduating with six months of real-world work experience"]'
        );
        await expect(highlightImg.first()).toBeAttached();
    });
});
