export default {

	url_selection_changed () {
		let a = TableURLs.selectedRow;
		InputURL.setValue("https://www.topview.ai" + a.url);
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}