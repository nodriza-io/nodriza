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
  "type": {
    "description": "Company type",
    "example": "host",
    "type": "string",
    "enum": [
      "host",
      "client",
      "partner",
      "provider"
    ],
    "required": true
  },
  "name": {
    "description": "Company friendly name",
    "example": "Acme",
    "type": "string",
    "displayName": true,
    "required": true
  },
  "shortname": {
    "description": "Unique shortname identifier",
    "example": "acme-inc",
    "type": "string",
    "required": true,
    "unique": true,
    "regex": "/^([a-z0-9_-]+)$/",
    "maxLength": 16,
    "skipUpdate": true,
    "existCheck": true
  },
  "legalName": {
    "description": "Full company name used for legal and accounting issues",
    "example": "Acme Inc.",
    "type": "string"
  },
  "size": {
    "description": "Number of company employees, this enumeration is available at the company controller",
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
    "description": "Company industry type, this enumeration is available at the company controller",
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
  "street": {
    "description": "Street name",
    "example": "100 North Washington St",
    "type": "string"
  },
  "city": {
    "description": "City name",
    "example": "Boston",
    "type": "string"
  },
  "state": {
    "description": "State name",
    "example": "MA",
    "type": "string"
  },
  "country": {
    "description": "Country name",
    "model": "country",
    "mustExist": true
  },
  "phone": {
    "description": "Phone number",
    "type": "string"
  },
  "lat": {
    "description": "Used for geolocation at GoogleMaps",
    "type": "float"
  },
  "lng": {
    "description": "Used for geolocation at GoogleMaps",
    "type": "float"
  },
  "postal": {
    "type": "string"
  },
  "website": {
    "description": "Company website",
    "type": "string"
  },
  "linkedIn": {
    "description": "Company linkedIn profile",
    "type": "string"
  },
  "referedBy": {
    "description": "The user who refered this company as client",
    "model": "user",
    "mustExist": true
  },
  "logos": {
    "description": "Company logo in different sizes",
    "type": "json",
    "skipAll": true
  },
  "description": {
    "description": "Acmen Inc. is a new company that will provide high quality technical and environmental engineering services to it's clients.",
    "type": "string"
  },
  "tags": {
    "description": "Tags could be used for multiple purposes",
    "type": "array"
  }
}