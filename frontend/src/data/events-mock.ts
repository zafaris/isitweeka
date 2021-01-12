/**
 * MOCK Events data
 * Replace with actual JSON response later
 */

import { EventData, EventTypes } from "../components/EventsList";

const events: EventData = {
	events: [
		{
			title: "Would I Lie To You?",
			description: "Come here teachers tell their embarrsing stories!",
			url: "https://www.eventbrite.co.uk/e/would-i-lie-to-you-students-vs-teachers-tickets-133890123965?aff=isitweeka",
			ticketsSale: {
				start: "01/01/2020"
			},
			headerURL: "/events/WILTY_Logo.png",
			backgroundColor: "#2C1F39",
			eventType: EventTypes.CHARITY,
			hidden: true,
		},
		{
			title: "LockdownRuns4Charity",
			description: "LockdownRuns4Charity",
			url: "https://www.gofundme.com/f/khsjye-lockdownruns4charity",
			headerURL: "/events/WILTY_Logo.png",
			backgroundColor: "#2C1F39",
			eventType: EventTypes.FUNDRIASER,
			target: "£1500"
		},
		{
			eventType: EventTypes.HOUSE,
			title: "House Touch Rugby",
			headerURL: "/events/TMPHouseChampionshipDefault.jpg",
			dateTime: "Autumn 2020",
			state: "done",
			currentVictor: "Beaufort",
			description: "House Touch Rugby",
			backgroundColor: "#752023"
		}
	],
	generatedAt: "0"
};

export default events;