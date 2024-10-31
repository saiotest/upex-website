input_data = {
	'sprints': 'S45',
	'sprint_blackhole': 'S45',
	'sprint_senpai': 'S45',
	'courses': 'Python',
	'tutorship': 'SEMANAL',
}

sprint_pricing = 25
course_pricing = 50
tutorship_pricing = {
	'SEMANAL': 20,
	'QUINCENAL': 40,
	'MENSUAL': 80,
}

#*---- SPRINT MAPPING ----:
sprints_data = input_data.get('sprints', '')
blackhole_data = input_data.get('sprint_blackhole', '')
senpai_data = input_data.get('sprint_senpai', '')
sprints = sprints_data.split(',')
sprint_blackhole = blackhole_data.split(',')
sprint_senpai = senpai_data.split(',')
# Sprint real data (remove empty strings):
sprints = [sprint.strip() for sprint in sprints if sprint]
print('sprints:', sprints)
sprint_blackhole = [sprint.strip() for sprint in sprint_blackhole if sprint]
print('sprint_blackhole:', sprint_blackhole)
sprint_senpai = [sprint.strip() for sprint in sprint_senpai if sprint]
print('sprint_senpai:', sprint_senpai)
# Sprint Data Simplified for Table:
sprint_list = [sprint.split(' ')[0] for sprint in sprints]
sprint_senpai_list = [sprint.split(' ')[0] for sprint in sprint_senpai]
sprint_blackhole_list = [sprint.split(' ')[0] for sprint in sprint_blackhole]
# Calculation of Sprint total price:
# Avoid counting blackole sprints:
accountable_sprints = [sprint for sprint in sprint_list if sprint not in sprint_blackhole_list]
sprints_totals = len(accountable_sprints) * sprint_pricing

print('+ sprints_totals:', sprints_totals)

#*---- COURSE MAPPING ----:
courses_data = input_data.get('courses', '')
# if course exists, continue:
courses_totals = 0
courses = []
if courses_data:
	courses = courses_data.split(',')
	courses_totals = len(courses) * course_pricing
 
print('+ courses_totals:', courses_totals)

#*---- TUTORSHIP MAPPING ----:
tutorship_data = input_data.get('tutorship', '')
tutorship_totals = 0
# if tutorship just one value, so if it is SEMANAL, multiply sprint_senpai by SEMANAL price, QUINCENAL by QUINCENAL price, etc.
if tutorship_data:
	# if tutorship has "SEMANAL" in string, multiply sprint_senpai by SEMANAL price:
	if 'SEMANAL' in tutorship_data:
		tutorship_totals = len(sprint_senpai_list) * tutorship_pricing['SEMANAL']
	# if tutorship has "QUINCENAL" in string, multiply sprint_senpai by QUINCENAL price:
	if 'QUINCENAL' in tutorship_data:
		tutorship_totals = len(sprint_senpai_list) * tutorship_pricing['QUINCENAL']
	# if tutorship has "MENSUAL" in string, multiply sprint_senpai by MENSUAL price:
	if 'MENSUAL' in tutorship_data:
		tutorship_totals = len(sprint_senpai_list) * tutorship_pricing['MENSUAL']

print('+ tutorship_totals:', tutorship_totals)

#*---- TOTAL PRICE ----:
subtotal_price = sprints_totals + courses_totals + tutorship_totals
print('+ subTotal_price:', subtotal_price)
total_discount = 0 
if len(courses) >= 3:
	total_discount += 0.10
if len(sprint_senpai_list) >= 2:
    total_discount += 0.20
    
total_discount = round(total_discount,2)

discount_label = f'{round(total_discount * 100)}%'
print('+ total_discount:', discount_label)

total_price = subtotal_price - (subtotal_price * total_discount)
total_price = round(total_price)
print('+ total_price:', total_price)

#Convert in Arg Pesos:
ars_price = round(total_price * 1200)
print('+ total_price_ARS:', ars_price)

output = {
    'sprints': sprint_list, 
    'subtotal_price': subtotal_price,
    'total_discount': discount_label,
    'total_price': total_price,
    'total_price_ARS': ars_price,
    'sprint_senpai': sprint_senpai_list,
    'sprint_blackhole': sprint_blackhole_list,
    'courses': courses_data,
    'tutorship': tutorship_data,
}

print(output)