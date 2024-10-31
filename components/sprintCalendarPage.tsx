'use client';

import React, { useState, useEffect, useRef } from 'react';
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isMonday, getDay, isSaturday, isSunday, startOfWeek, endOfWeek } from 'date-fns';
import { es } from 'date-fns/locale';
import Header from './header';
import Footer from './footer';

interface SprintDay {
	date: Date;
	event?: string;
	sprintNumber: number;
	isCurrentMonth: boolean;
}

const SPRINT_LENGTH = 28; // 4 weeks

const generateCalendar = (startDate: Date, monthsToGenerate: number): SprintDay[][] => {
	const calendar: SprintDay[][] = [];
	let currentDate = startDate;
	let currentSprintNumber = 40;
	const sprintStartDate = new Date(2024, 2, 18); // March 18, 2024 (start of S40)

	for (let i = 0; i < monthsToGenerate; i++) {
		const monthStart = startOfMonth(currentDate);
		const monthEnd = endOfMonth(monthStart);
		const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
		const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
		const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

		const monthDays: SprintDay[] = days.map(day => {
			const isInCurrentMonth = isSameMonth(day, monthStart);
			let event: string | undefined;
			let sprintNumber = currentSprintNumber;

			const daysSinceSprintStart = Math.floor((day.getTime() - sprintStartDate.getTime()) / (1000 * 60 * 60 * 24));
			const dayInSprint = daysSinceSprintStart % SPRINT_LENGTH;

			if (isInCurrentMonth) {
				if (dayInSprint === 0 && isMonday(day)) {
					// First Monday of sprint
					event = 'Sprint Planning';
					currentSprintNumber++;
				} else if (dayInSprint === 25 && getDay(day) === 5) {
					// Last Friday of sprint
					event = 'Sprint Review';
				} else if (dayInSprint === 26 && isSaturday(day)) {
					// Saturday after last Friday
					event = 'Sprint Retro';
				} else if (!isSaturday(day) && !isSunday(day)) {
					// Weekdays (Monday to Friday)
					event = 'Daily';
				}

				if (dayInSprint === 0 && isMonday(day)) {
					sprintNumber = currentSprintNumber;
				}
			}

			return {
				date: day,
				event,
				sprintNumber: isInCurrentMonth ? sprintNumber : -1,
				isCurrentMonth: isInCurrentMonth
			};
		});

		calendar.push(monthDays);
		currentDate = addMonths(currentDate, 1);
	}

	return calendar;
};

const Legend: React.FC = () => (
	<div className="flex flex-wrap justify-center gap-4 mb-4 text-white text-sm">
		<div className="flex items-center">
			<div className="w-4 h-4 bg-gray-600 mr-1"></div>
			<span>Day-Off</span>
		</div>
		<div className="flex items-center">
			<div className="w-4 h-4 bg-indigo-700 mr-1"></div>
			<span>Sprint Day</span>
		</div>
		<div className="flex items-center">
			<div className="w-4 h-4 bg-green-600 mr-1"></div>
			<span>Sprint Planning</span>
		</div>
		<div className="flex items-center">
			<div className="w-4 h-4 bg-yellow-600 mr-1"></div>
			<span>Sprint Review</span>
		</div>
		<div className="flex items-center">
			<div className="w-4 h-4 bg-red-600 mr-1"></div>
			<span>Sprint Retro</span>
		</div>
		<div className="flex items-center">
			<div className="w-4 h-4 bg-blue-600 mr-1"></div>
			<span>Daily</span>
		</div>
	</div>
);

const MonthCalendar: React.FC<{ month: SprintDay[]; index: number }> = ({ month }) => {
	const monthYear = format(month.find(day => day.isCurrentMonth)?.date || month[0].date, 'MMMM yyyy', { locale: es });

	return (
		<div className="bg-blue-500 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-4 mb-4 text-white w-full max-w-lg mx-auto">
			<h2 className="text-2xl font-bold mb-4 text-white capitalize text-center">{monthYear}</h2>
			<div className="grid grid-cols-7 gap-1">
				{['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(day => (
					<div key={day} className="text-center font-semibold text-indigo-300 text-xs">
						{day}
					</div>
				))}
				{month.map((day, index) => (
					<div key={index} className={`p-1 text-center rounded ${day.isCurrentMonth ? (day.event === 'Sprint Planning' ? 'bg-green-600 bg-opacity-70' : day.event === 'Sprint Review' ? 'bg-yellow-600 bg-opacity-70' : day.event === 'Sprint Retro' ? 'bg-red-600 bg-opacity-70' : day.event === 'Daily' ? 'bg-blue-600 bg-opacity-70' : 'bg-gray-600 bg-opacity-50') : 'bg-transparent'} ${!day.isCurrentMonth ? 'opacity-50' : ''}`}>
						{day.isCurrentMonth && (
							<>
								<div className="font-semibold text-sm">{format(day.date, 'd')}</div>
								{day.sprintNumber !== -1 && <div className="text-xs text-yellow-300">S{day.sprintNumber}</div>}
								{day.event && <div className="text-[10px] text-white font-bold">{day.event}</div>}
							</>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export function SprintCalendarPage() {
	const [calendar, setCalendar] = useState<SprintDay[][]>([]);
	const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const startDate = new Date(2024, 3, 1); // April 1, 2024
		setCalendar(generateCalendar(startDate, 12)); // Generate 12 months starting from April 2024
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (containerRef.current) {
				const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
				const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
				const newIndex = Math.round(scrollPercentage * (calendar.length - 1));
				setCurrentMonthIndex(newIndex);
			}
		};

		const container = containerRef.current;
		if (container) {
			container.addEventListener('scroll', handleScroll);
		}

		return () => {
			if (container) {
				container.removeEventListener('scroll', handleScroll);
			}
		};
	}, [calendar]);

	if (calendar.length === 0) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
				<div className="text-white text-2xl">Loading calendar...</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] text-white flex flex-col">
			<Header />
			<main className="relative flex-grow">
				<div className="max-w-6xl mx-auto text-center space-y-6 mt-20 flex flex-col items-center">
					<h1 className="p-2 text-4xl md:text-5xl lg:text-7xl font-bold mb-1 mt-12 bg-clip-text text-transparent bg-gradient-to-r from-[#eaff00] via-[#01fff2] to-[#ff79eb]">Galaxy Sprint Calendar</h1>
					<Legend />
					<div ref={containerRef} className="relative w-full max-w-lg overflow-y-auto" style={{ height: 'calc(100vh - 250px)' }}>
						<div className="space-y-4">
							{calendar.map((month, index) => (
								<div
									key={index}
									style={{
										opacity: 1 - Math.abs(index - currentMonthIndex) * 0.5,
										transform: `scale(${1 - Math.abs(index - currentMonthIndex) * 0.1})`,
										transition: 'opacity 0.3s, transform 0.3s'
									}}>
									<MonthCalendar month={month} index={index} />
								</div>
							))}
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
