import { useWebApp, useWebAppCloudStorage, useWebAppPopup, useWebAppRequests } from 'vue-tg';
import type { TContactData } from '~/types';

export const useTgWebAppStore = defineStore('tgWebAppStore', () => {
	const webAppData = ref<null | Record<string, any>>(null);
	const dataUnsafe = ref<string | null>(null);
	const contactData = ref<Record<TContactData, number | string> | null>(null);

	const init = async () => {
		webAppData.value = useWebApp();
		if (webAppData.value?.version > '6.0') {
			await initDataUnsafe();
			await getContactData();
		}
	};

	const initDataUnsafe = async () => {
		const data = await useWebAppCloudStorage().getStorageItem('initDataUnsafe');
		if (typeof data === 'string' && data === '') {
			dataUnsafe.value = useWebApp().initDataUnsafe;
			await useWebAppCloudStorage().setStorageItem('initDataUnsafe', JSON.stringify(dataUnsafe.value));
		}
		else {
			dataUnsafe.value = JSON.parse(data as string);
		}
	};

	const getContactData = async () => {
		const data = await useWebAppCloudStorage().getStorageItem('contactData');
		console.log(data, ' ok');
		if (typeof data === 'string' && data === '') {
			useWebAppRequests().requestContact((ok, response) => {
				console.log(ok, response?.responseUnsafe.contact);
				if (ok) {
					useWebAppCloudStorage()
						.setStorageItem('contactData', JSON.stringify(response?.responseUnsafe.contact));
				}
				else {
					useWebAppPopup().showAlert('Контакт не получен');
				}
			});
		}
		else {
			contactData.value = JSON.parse(data as string);
		}
	};

	return {
		contactData,
		init,
	};
});
