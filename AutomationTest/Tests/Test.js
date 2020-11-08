import { Selector, t } from 'testcafe';
import { ClientFunction } from 'testcafe';


const signInLinkBtn = Selector('[data-qa="header-link-signin"]');
const email = Selector('[data-qa="signin-inputfield-emailaddress"]');
const password = Selector('[data-qa="signin-inputfield-password"]');
const signInBtn = Selector('[data-qa="signin-btn-signin"]');
const createNewWebsiteBtn = Selector('[data-qa="sites-header-btn-createnewwebsite"]')
const startBuildingBtn = Selector ('[data-qa="templates-template-btn-startbuilding-blackmore"]');
const publishBtn = Selector('.publish-button__content');
const freeDomain = Selector('[data-qa="builder-publishmodal-inputfield-freedomain"]');
const continuePublishBtn = Selector('[data-qa="builder-publishmodal-btn-continue"]');
const viewYourSiteBtn = Selector('[data-qa="builder-publishmodal-btn-viewyoursite"]');
const getLocation = ClientFunction(() => window.location.href);


fixture `Open Zyro trial page`
        .page `https://zyro.com/trial`;


test('Zyro flow test', async t => {
    await t
        .maximizeWindow()
        .expect(signInLinkBtn.visible).ok()
        .click(signInLinkBtn)
        .typeText(email, 'testuser@testuser.com')
        .typeText(password, 'testuser.123')
        .click(signInBtn)
        .expect(createNewWebsiteBtn.visible).ok()

        .click(createNewWebsiteBtn)
        .click(startBuildingBtn)
        .expect(publishBtn.visible).ok()

        .click(publishBtn)
        .typeText(freeDomain, 'uniquewebsite001')
        .expect(continuePublishBtn.hasAttribute('disabled')).notOk()

        .click(continuePublishBtn)
        .expect(viewYourSiteBtn.visible).ok()
        .click(viewYourSiteBtn)
        .maximizeWindow()
        .expect(getLocation()).contains('uniquewebsite001')
});     