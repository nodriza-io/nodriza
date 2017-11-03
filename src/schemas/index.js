'use strict'

import Ami from './AmiSchema'
import App from './AppSchema'
import Apparience from './ApparienceSchema'
import Company from './CompanySchema'
import Config from './ConfigSchema'
import Exchange from './ExchangeSchema'
import Lead from './LeadSchema'
import Role from './RoleSchema'
import Service from './ServiceSchema'
import Token from './TokenSchema'
import User from './UserSchema'
import Department from './DepartmentSchema'
import Template from './TemplateSchema'
import AccessPolicy from './AccessPolicySchema'
import Country from './CountrySchema'
import Currency from './CurrencySchema'
import CommunityAmi from './CommunityAmiSchema'
import AwsInstance from './AwsInstanceSchema'
import Activity from './ActivitySchema'
import Quote from './QuoteSchema'
import Region from './RegionSchema'
import AwsAccount from './AwsAccountSchema'
import AvailabilityZone from './AvailabilityZoneSchema'
import Tax from './TaxSchema'
import Category from './CategorySchema'
import Product from './ProductSchema'
import PeriodicityPreset from './PeriodicityPresetSchema'

export class Schemas {
  constructor (params) {
    this.ami = Ami
    this.app = App
    this.apparience = Apparience
    this.company = Company
    this.config = Config
    this.exchange = Exchange
    this.lead = Lead
    this.role = Role
    this.service = Service
    this.token = Token
    this.user = User
    this.department = Department
    this.template = Template
    this.accessPolicy = AccessPolicy
    this.country = Country
    this.currency = Currency
    this.communityAmi = CommunityAmi
    this.awsInstance = AwsInstance
    this.activity = Activity
    this.quote = Quote
    this.region = Region
    this.awsAccount = AwsAccount
    this.availabilityZone = AvailabilityZone
    this.tax = Tax
    this.category = Category
    this.product = Product
    this.periodicityPreset = PeriodicityPreset
  }
}
