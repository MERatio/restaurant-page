import './contact.css';

function contact() {
	const contactSection = document.createElement('section');
	contactSection.classList.add('content-section');
	contactSection.innerHTML = `
		<h2 class="text-theme text-uppercase text-center">
			Restaurant Location
		</h2>
		<iframe
			class="contact-google-maps-iframe mt-2"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64722591.56959051!2d-149.23960340000002!3d-8.065379849999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76ed042c30f318eb%3A0x8eff14a070876cbc!2sPacific%20Ocean!5e0!3m2!1sen!2sph!4v1698379316314!5m2!1sen!2sph"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	`;
	return contactSection;
}

export default contact;
