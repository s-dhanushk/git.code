import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { School, Hospital, Shield, Zap, Phone, Users, Clock, MapPin } from 'lucide-react';

const services = [
  {
    category: 'Healthcare',
    icon: Hospital,
    color: 'bg-red-500',
    facilities: [
      { name: 'City General Hospital', capacity: 450, occupied: 382, wait: '15 min', status: 'operational' },
      { name: 'North Medical Center', capacity: 280, occupied: 245, wait: '22 min', status: 'operational' },
      { name: 'Emergency Clinic East', capacity: 120, occupied: 98, wait: '8 min', status: 'operational' },
    ]
  },
  {
    category: 'Education',
    icon: School,
    color: 'bg-blue-500',
    facilities: [
      { name: 'Central High School', capacity: 1200, occupied: 1156, wait: 'N/A', status: 'operational' },
      { name: 'Riverside Elementary', capacity: 600, occupied: 587, wait: 'N/A', status: 'operational' },
      { name: 'Tech University Campus', capacity: 5000, occupied: 4823, wait: 'N/A', status: 'operational' },
    ]
  },
  {
    category: 'Public Safety',
    icon: Shield,
    color: 'bg-purple-500',
    facilities: [
      { name: 'Police Station Central', capacity: 50, occupied: 42, wait: '5 min', status: 'operational' },
      { name: 'Fire Station North', capacity: 35, occupied: 35, wait: 'On Standby', status: 'operational' },
      { name: 'Emergency Response Unit', capacity: 25, occupied: 22, wait: 'Ready', status: 'operational' },
    ]
  },
];

const emergencyServices = [
  { type: 'Police', number: '911', responseTime: '4 min', available: 24 },
  { type: 'Fire', number: '911', responseTime: '3 min', available: 18 },
  { type: 'Ambulance', number: '911', responseTime: '6 min', available: 32 },
  { type: 'Utilities', number: '311', responseTime: '15 min', available: 45 },
];

const recentIncidents = [
  { time: '10 min ago', type: 'Medical', location: '5th Ave & Main St', status: 'Responded', priority: 'high' },
  { time: '25 min ago', type: 'Traffic', location: 'Highway 101', status: 'Resolved', priority: 'medium' },
  { time: '1 hour ago', type: 'Utility', location: 'North District', status: 'In Progress', priority: 'low' },
  { time: '2 hours ago', type: 'Fire', location: 'Industrial Park', status: 'Resolved', priority: 'high' },
];

export function PublicServices() {
  const statusColors = {
    operational: 'bg-green-500',
    busy: 'bg-orange-500',
    offline: 'bg-red-500',
  };

  const priorityColors = {
    high: 'text-red-600',
    medium: 'text-orange-600',
    low: 'text-blue-600',
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-slate-900">Public Services</h2>
        <p className="text-slate-600">Monitor healthcare, education, and emergency services</p>
      </div>

      {/* Emergency Services */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-red-500" />
            Emergency Services
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {emergencyServices.map((service, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-slate-900">{service.type}</h3>
                  <Badge className="bg-green-500">{service.number}</Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span>Avg. response: {service.responseTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Users className="w-4 h-4" />
                    <span>{service.available} units available</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Service Categories */}
      {services.map((service) => {
        const Icon = service.icon;
        
        return (
          <Card key={service.category}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className={`w-10 h-10 ${service.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                {service.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {service.facilities.map((facility, index) => {
                  const utilization = (facility.occupied / facility.capacity) * 100;
                  
                  return (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-slate-600 mt-1" />
                          <div>
                            <h3 className="text-slate-900">{facility.name}</h3>
                            <p className="text-slate-600 text-sm mt-1">
                              Wait time: {facility.wait}
                            </p>
                          </div>
                        </div>
                        <Badge className={statusColors[facility.status as keyof typeof statusColors]}>
                          {facility.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Capacity</span>
                          <span className="text-slate-900">
                            {facility.occupied} / {facility.capacity}
                          </span>
                        </div>
                        <Progress value={utilization} />
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-500">Utilization</span>
                          <span className={utilization > 85 ? 'text-red-600' : 'text-green-600'}>
                            {utilization.toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        );
      })}

      {/* Recent Incidents */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-orange-500" />
            Recent Incidents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentIncidents.map((incident, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{incident.type}</Badge>
                    <span className={`text-sm ${priorityColors[incident.priority as keyof typeof priorityColors]}`}>
                      {incident.priority.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{incident.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-slate-900 text-sm">{incident.status}</p>
                  <p className="text-slate-500 text-xs mt-1">{incident.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Service Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">Total Facilities</p>
                <p className="text-slate-900 mt-1">47</p>
                <p className="text-green-600 text-xs mt-1">+3 this year</p>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">Active Personnel</p>
                <p className="text-slate-900 mt-1">3,247</p>
                <p className="text-green-600 text-xs mt-1">98% staffed</p>
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">Avg Response Time</p>
                <p className="text-slate-900 mt-1">4.5 min</p>
                <p className="text-green-600 text-xs mt-1">-12% vs last month</p>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Activity(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function Building2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}
