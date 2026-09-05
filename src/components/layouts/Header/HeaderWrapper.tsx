import { getHeaderMenu, getTopbarData } from "@/lib/api/common";
import Header from "./Header";
import { getPageAssets } from "@/lib/api/global-setting";

const HeaderWrapper = async () => {
    const [topbarData, headerMenuData, headerAssets] = await Promise.all([
        getTopbarData(),
        getHeaderMenu(),
        getPageAssets(),
    ]);

    const topbarmenus = topbarData?.TopbarMenuItems;
    const topbarsociallinks = topbarData?.topbarsociallinks;
    const headerMenus = headerMenuData?.headermenus;
    const { css_in_header } = headerAssets || {};

    return (
        <>
            <Header
                topbarmenu={topbarmenus || []}
                topbarsociallinks={topbarsociallinks || []}
                headerMenus={headerMenus || []}
            />
            {css_in_header && (
                <style dangerouslySetInnerHTML={{ __html: css_in_header }} />
            )}
        </>
    );
};

export default HeaderWrapper;
