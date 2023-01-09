/**
 * External dependencies.
 */
import moment from 'moment';

/**
 * WordPress dependencies.
 */
import { select } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies.
 */
import { enableSave } from './misc';
import { isEventPostType } from './event';

export const dateTimeMomentFormat = 'YYYY-MM-DDTHH:mm:ss';
export const dateTimeDatabaseFormat = 'YYYY-MM-DD HH:mm:ss';
export const dateTimeLabelFormat = 'MMMM D, YYYY h:mm a z';
// eslint-disable-next-line no-undef
export const timeZone = GatherPress.event_datetime.timezone;
export const defaultDateTimeStart = moment
	.tz(timeZone)
	.add(1, 'day')
	.set('hour', 18)
	.set('minute', 0)
	.set('second', 0)
	.format(dateTimeMomentFormat);

export const getDateTimeStart = () => {
	// eslint-disable-next-line no-undef
	let dateTime = GatherPress.event_datetime.datetime_start;

	dateTime =
		'' !== dateTime
			? moment.tz(dateTime, timeZone).format(dateTimeMomentFormat)
			: defaultDateTimeStart;

	// eslint-disable-next-line no-undef
	GatherPress.event_datetime.datetime_start = dateTime;

	return dateTime;
};

export const getDateTimeEnd = () => {
	// eslint-disable-next-line no-undef
	let dateTime = GatherPress.event_datetime.datetime_end;

	dateTime =
		'' !== dateTime
			? moment.tz(dateTime, timeZone).format(dateTimeMomentFormat)
			: moment
					.tz(defaultDateTimeStart, timeZone)
					.add(2, 'hours')
					.format(dateTimeMomentFormat);

	// eslint-disable-next-line no-undef
	GatherPress.event_datetime.datetime_end = dateTime;

	return dateTime;
};

export const updateDateTimeStart = (date, setDateTimeStart = null) => {
	validateDateTimeStart(date);

	// eslint-disable-next-line no-undef
	GatherPress.event_datetime.datetime_start = date;

	if ('function' === typeof setDateTimeStart) {
		setDateTimeStart(date);
	}

	enableSave();
};

export const updateDateTimeEnd = (date, setDateTimeEnd = null) => {
	validateDateTimeEnd(date);

	// eslint-disable-next-line no-undef
	GatherPress.event_datetime.datetime_end = date;

	if (null !== setDateTimeEnd) {
		setDateTimeEnd(date);
	}

	enableSave();
};

export function validateDateTimeStart(dateTimeStart) {
	const dateTimeEndNumeric = moment
		.tz(
			// eslint-disable-next-line no-undef
			GatherPress.event_datetime.datetime_end,
			timeZone
		)
		.valueOf();
	const dateTimeStartNumeric = moment.tz(dateTimeStart, timeZone).valueOf();

	if (dateTimeStartNumeric >= dateTimeEndNumeric) {
		const dateTimeEnd = moment
			.tz(dateTimeStartNumeric, timeZone)
			.add(2, 'hours')
			.format(dateTimeMomentFormat);

		updateDateTimeEnd(dateTimeEnd);
	}
}

export function validateDateTimeEnd(dateTimeEnd) {
	const dateTimeStartNumeric = moment
		.tz(
			// eslint-disable-next-line no-undef
			GatherPress.event_datetime.datetime_start,
			timeZone
		)
		.valueOf();
	const dateTimeEndNumeric = moment.tz(dateTimeEnd, timeZone).valueOf();

	if (dateTimeEndNumeric <= dateTimeStartNumeric) {
		const dateTimeStart = moment
			.tz(dateTimeEndNumeric, timeZone)
			.subtract(2, 'hours')
			.format(dateTimeMomentFormat);
		updateDateTimeStart(dateTimeStart);
	}
}

export function saveDateTime() {
	const isSavingPost = select('core/editor').isSavingPost(),
		isAutosavingPost = select('core/editor').isAutosavingPost();

	if (isEventPostType() && isSavingPost && !isAutosavingPost) {
		apiFetch({
			path: '/gatherpress/v1/event/datetime/',
			method: 'POST',
			data: {
				// eslint-disable-next-line no-undef
				post_id: GatherPress.post_id,
				datetime_start: moment
					.tz(
						// eslint-disable-next-line no-undef
						GatherPress.event_datetime.datetime_start,
						timeZone
					)
					.format(dateTimeDatabaseFormat),
				datetime_end: moment
					.tz(
						// eslint-disable-next-line no-undef
						GatherPress.event_datetime.datetime_end,
						timeZone
					)
					.format(dateTimeDatabaseFormat),
				// eslint-disable-next-line no-undef
				_wpnonce: GatherPress.nonce,
			},
		}).then(() => {
			// Saved.
		});
	}
}