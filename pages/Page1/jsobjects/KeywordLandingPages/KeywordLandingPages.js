export default {

	async new_keyword_langding_page_confirmed () {
		const resp = await keyword_landingpages_new.run();

		closeModal(ModalNewKeywordLandingPage.name);
		keyword_landingpages.run();
	},

	async save_keyword_landing_page () {
		const resp = await keyword_landingpages_modify.run();
	}
}