import { test, expect } from "@playwright/test";

test.describe("Homepage E2E & Alt Tag Tests", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("should load homepage and display title", async ({ page }) => {
        await expect(page).toHaveTitle(/K\.?R\.? Mangalam University/i);
    });

    test("Hero Section: should have hero video with accessibility attributes", async ({
        page,
    }) => {
        const video = page.locator("video");
        await expect(video.first()).toBeVisible();
        await expect(video.first()).toHaveAttribute(
            "title",
            "KR Mangalam university video"
        );
        await expect(video.first()).toHaveAttribute(
            "aria-label",
            "KR Mangalam university video"
        );
    });

    test("Top Recruiters: should have recruiter logos with accurate alt tags", async ({
        page,
    }) => {
        const recruitersSection = page.locator(
            "text=Trusted by Leading Global Recruiters"
        );
        await expect(recruitersSection).toBeVisible();

        // Initial 10 recruiters visible by default
        const initialRecruiters = [
            "Tata — KRMU recruiter logo",
            "Meta — KRMU recruiter logo",
            "Microsoft — KRMU recruiter logo",
            "JP Morgan — KRMU recruiter logo",
            "LinkedIn — KRMU recruiter logo",
            "Google — KRMU recruiter logo",
            "Infosys — KRMU recruiter logo",
            "IBM — KRMU recruiter logo",
            "ITC — KRMU recruiter logo",
            "Cisco — KRMU recruiter logo",
        ];

        for (const altText of initialRecruiters) {
            const img = page.locator(`img[alt="${altText}"]`);
            await expect(img.first()).toBeAttached();
        }

        // Expand recruiter list
        const showMoreBtn = page.locator(
            'button:has-text("Show More"), button:has-text("View More")'
        );
        if (
            (await showMoreBtn.count()) > 0 &&
            (await showMoreBtn.first().isVisible())
        ) {
            await showMoreBtn.first().click();
            const additionalRecruiter = page.locator(
                'img[alt="Amazon — KRMU recruiter logo"]'
            );
            await expect(additionalRecruiter.first()).toBeAttached();
        }
    });

    test("Life at KRMU / Facilities / Clubs: should have properly mapped alt tags", async ({
        page,
    }) => {
        const facilityImg = page.locator(
            'img[alt="State-of-the-art infrastructure and facilities at K.R. Mangalam University"]'
        );
        await expect(facilityImg.first()).toBeAttached();

        const clubsImg = page.locator(
            'img[alt="KRMU student club/society activity"]'
        );
        await expect(clubsImg.first()).toBeAttached();
    });

    test("Research Section: should have research banner with accurate alt tag", async ({
        page,
    }) => {
        const researchImg = page.locator(
            'img[alt="Leading-edge research and innovation at K.R. Mangalam University"]'
        );
        await expect(researchImg.first()).toBeAttached();
    });

    test("Global Partners: should have partner logos with accurate alt tags", async ({
        page,
    }) => {
        const partnerImg = page.locator(
            'img[alt*="— KRMU global partner university"]'
        );
        await expect(partnerImg.first()).toBeAttached();
    });

    test("Testimonials: should have student photo alt tags matching table", async ({
        page,
    }) => {
        const testimonialImg = page.locator(
            'img[alt="Krish Agarwal, B.Tech CSE AI/ML student testimonial at KRMU"]'
        );
        await expect(testimonialImg.first()).toBeAttached();
    });

    test("Global Footer: should have accreditation logo and footer elements with accurate alt tags", async ({
        page,
    }) => {
        const accreditationImg = page.locator(
            'img[alt="NAAC and accreditation logos for K.R. Mangalam University"]'
        );
        await expect(accreditationImg.first()).toBeAttached();
    });
});
