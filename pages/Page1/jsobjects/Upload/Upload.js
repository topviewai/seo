export default {
	async upload_media () {
		let resp = await upload.run();

		InputUploadedUrl.setValue(resp['url']);
		if (resp['type'] == 'image') {
			ImageUploaded.setImage(resp['url']);
			VideoUploaded.setURL(null);
		} else {
			VideoUploaded.setURL(resp['url']);
			ImageUploaded.setImage(null);
		}
		resetWidget('FilePickerImage');
	}
}