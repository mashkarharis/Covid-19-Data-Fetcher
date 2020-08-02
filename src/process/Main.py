import json

with open('countries.json') as f:
  data = json.load(f)
  print('[')
  for i in range(188):
      print ('\''+data['countries'][i]['name']+'\',')
  print(']')
