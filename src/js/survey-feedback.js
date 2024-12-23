document.addEventListener('DOMContentLoaded', function () {
	const surveyAction = document.querySelector('.survey-action');
	const surveyYes = document.getElementById('survey-yes');
	const surveyNo = document.getElementById('survey-no');
	const surveyYesContent = document.querySelector('.survey-yes');
	const surveyNoContent = document.querySelector('.survey-no');

	// Helper function to toggle classes
	const toggleClasses = (addClassElement, removeClassElement, targetContent, otherContent) => {
		// Show the appropriate survey content
		if (targetContent) {
			targetContent.classList.remove('d-none');
		}
		if (otherContent) {
			otherContent.classList.add('d-none');
		}

		// Add the "clicked" class to the appropriate button
		if (addClassElement) {
			addClassElement.classList.add('clicked');
		}

		// Remove the "clicked" class from the other button
		if (removeClassElement) {
			removeClassElement.classList.remove('clicked');
		}

		// Show the survey-action container
		if (surveyAction) {
			surveyAction.classList.remove('d-none');
		}
	};

	// Handle "Yes" button click
	if (surveyYes) {
		surveyYes.addEventListener('click', function () {
			toggleClasses(surveyYes, surveyNo, surveyYesContent, surveyNoContent);
		});
	}

	// Handle "No" button click
	if (surveyNo) {
		surveyNo.addEventListener('click', function () {
			toggleClasses(surveyNo, surveyYes, surveyNoContent, surveyYesContent);
		});
	}
});