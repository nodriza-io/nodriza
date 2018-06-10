module.exports = {
  "createdBy": {
    "description": "User who created the resource",
    "model": "user",
    "skipAll": true
  },
  "updatedBy": {
    "description": "Last user who updated the resource",
    "model": "user",
    "skipAll": true
  },
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "status": {
    "description": "Status of lead",
    "example": "Open",
    "type": "string",
    "enum": [
      "Open",
      "Attempting",
      "Working",
      "Converted",
      "Disqualified"
    ],
    "defaultsTo": "Open",
    "skipAll": true
  },
  "firstName": {
    "required": true,
    "description": "User first name",
    "example": "John",
    "type": "string",
    "displayName": true,
    "notEmpty": true
  },
  "lastName": {
    "description": "User last name",
    "example": "Doe",
    "displayName": true,
    "type": "string"
  },
  "email": {
    "description": "User email",
    "example": "jdoe@acme.com",
    "unique": true,
    "type": "string",
    "regex": "/^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/",
    "existCheck": true
  },
  "companyName": {
    "description": "Company friendly name",
    "example": "Acme",
    "type": "string"
  },
  "department": {
    "description": "Company department where the user belongs",
    "example": "5940200e93e326e90c636826",
    "model": "department",
    "mustExist": true,
    "skipAll": true
  },
  "mobile": {
    "description": "User mobile number",
    "example": "57 311 521 3448",
    "type": "string"
  },
  "phone": {
    "description": "Phone number",
    "type": "string",
    "example": "+1 508-695-1212"
  },
  "website": {
    "description": "Full company website url",
    "example": "http://acme-inc.com",
    "type": "string"
  },
  "position": {
    "description": "Company user position",
    "example": "Sales Manager",
    "type": "string"
  },
  "starred": {
    "skipAll": true,
    "type": "array"
  },
  "avatars": {
    "description": "User avatar in different sizes",
    "type": "json",
    "skipAll": true
  },
  "logos": {
    "description": "Company logo",
    "type": "json",
    "skipAll": true
  },
  "map": {
    "description": "Google Maps Geo Location",
    "type": "json",
    "map": true,
    "example": {}
  },
  "address": {
    "description": "Google Maps address location",
    "type": "string",
    "address": true
  },
  "country": {
    "description": "Country name",
    "model": "country",
    "mustExist": true,
    "noCreate": true
  },
  "city": {
    "description": "City name",
    "example": "Los Angeles",
    "type": "string"
  },
  "street": {
    "description": "Street name",
    "example": "2719 Hyperion Ave",
    "type": "string"
  },
  "state": {
    "description": "State name",
    "example": "CA",
    "type": "string"
  },
  "postal": {
    "description": "Postal Code",
    "type": "string",
    "example": "90027"
  },
  "size": {
    "description": "Number of company employees",
    "example": "51-200",
    "type": "string",
    "enum": [
      "1-10",
      "51-200",
      "201-500",
      "501-1000",
      "11-50",
      "5000-10000",
      "1001-5000",
      "10000+"
    ]
  },
  "industry": {
    "description": "Company industry type",
    "example": "Computer Networking",
    "type": "string",
    "enum": [
      "Accounting",
      "Alternative Medicine",
      "Arts and Crafts",
      "Airlines/Aviation",
      "Alternative Dispute Resolution",
      "Animation",
      "Apparel & Fashion",
      "Architecture & Planning",
      "Automotive",
      "Aviation & Aerospace",
      "Banking",
      "Biotechnology",
      "Broadcast Media",
      "Building Materials",
      "Business Supplies and Equipment",
      "Capital Markets",
      "Chemicals",
      "Civic & Social Organization",
      "Civil Engineering",
      "Commercial Real Estate",
      "Computer & Network Security",
      "Computer Games",
      "Computer Hardware",
      "Computer Networking",
      "Computer Software",
      "Construction",
      "Consumer Electronics",
      "Consumer Goods",
      "Consumer Services",
      "Cosmetics",
      "Dairy",
      "Defense & Space",
      "Design",
      "Education Management",
      "E-Learning",
      "Electrical/Electronic Manufacturing",
      "Entertainment",
      "Environmental Services",
      "Events Services",
      "Executive Office",
      "Facilities Services",
      "Farming",
      "Financial Services",
      "Fine Art",
      "Fishery",
      "Food & Beverages",
      "Food Production",
      "Fund-Raising",
      "Furniture",
      "Glass, Ceramics & Concrete",
      "Government Administration",
      "Government Relations",
      "Graphic Design",
      "Health, Wellness and Fitness",
      "Higher Education",
      "Hospital & Health Care",
      "Hospitality",
      "Human Resources",
      "Import and Export",
      "Individual & Family Services",
      "Industrial Automation",
      "Information Services",
      "Information Technology and Services",
      "Insurance",
      "International Affairs",
      "International Trade and Development",
      "Internet",
      "Investment Banking",
      "Investment Management",
      "Judiciary",
      "Law Enforcement",
      "Law Practice",
      "Legal Services",
      "Leisure, Travel & Tourism",
      "Libraries",
      "Logistics and Supply Chain",
      "Luxury Goods & Jewelry",
      "Machinery",
      "Management Consulting",
      "Maritime",
      "Market Research",
      "Marketing and Advertising",
      "Mechanical or Industrial Engineering",
      "Media Production",
      "Medical Devices",
      "Medical Practice",
      "Mental Health Care",
      "Mining & Metals",
      "Motion Pictures and Film",
      "Museums and Institutions",
      "Music",
      "Nanotechnology",
      "Newspapers",
      "Nonprofit Organization Management",
      "Oil & Energy",
      "Online Media",
      "Outsourcing/Offshoring",
      "Package/Freight Delivery",
      "Packaging and Containers",
      "Performing Arts",
      "Pharmaceuticals",
      "Philanthropy",
      "Photography",
      "Plastics",
      "Political Organization",
      "Primary/Secondary Education",
      "Printing",
      "Professional Training & Coaching",
      "Program Development",
      "Public Policy",
      "Public Relations and Communications",
      "Publishing",
      "Ranching",
      "Real Estate",
      "Recreational Facilities and Services",
      "Religious Institutions",
      "Renewables & Environment",
      "Research",
      "Restaurants",
      "Retail",
      "Security and Investigations",
      "Semiconductors",
      "Shipbuilding",
      "Sporting Goods",
      "Sports",
      "Staffing and Recruiting",
      "Telecommunications",
      "Textiles",
      "Think Tanks",
      "Translation and Localization",
      "Transportation/Trucking/Railroad",
      "Utilities",
      "Venture Capital & Private Equity",
      "Veterinary",
      "Warehousing",
      "Wholesale",
      "Wine and Spirits",
      "Wireless",
      "Writing and Editing",
      "Gambling & Casinos",
      "Paper & Forest Products",
      "Supermarkets",
      "Public Safety",
      "Tobacco",
      "Legislative Office",
      "Militar"
    ]
  },
  "source": {
    "description": "Company where the lead belongs",
    "type": "string",
    "enum": [
      "Advertisement",
      "Customer Event",
      "Employee Referral",
      "Google AdWords",
      "LinkedIn",
      "Other",
      "Partner",
      "Purchased List",
      "Trade Show",
      "Webinar",
      "Website"
    ]
  },
  "rating": {
    "description": "Proposal scoring status",
    "type": "string",
    "enum": [
      "Hot",
      "Warm",
      "Cold"
    ]
  },
  "referedBy": {
    "description": "The user who refered this company as client",
    "model": "user"
  },
  "assignedTo": {
    "description": "Assign record to a user",
    "example": "59418bcd105605cc2693a981",
    "model": "user"
  },
  "convertedUser": {
    "model": "user"
  },
  "convertedCompany": {
    "model": "company"
  },
  "referenceNumber": {
    "unique": true,
    "type": "string"
  }
}