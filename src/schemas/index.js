'use strict'

import App from './AppSchema'
import Apparience from './ApparienceSchema'
import Company from './CompanySchema'
import Config from './ConfigSchema'
import Exchange from './ExchangeSchema'
import Lead from './LeadSchema'
import Role from './RoleSchema'
import Service from './ServiceSchema'
import System from './SystemSchema'
import Token from './TokenSchema'
import User from './UserSchema'
import Department from './DepartmentSchema'
import Template from './TemplateSchema'
import AccessPolicy from './AccessPolicySchema'
import Country from './CountrySchema'
import Currency from './CurrencySchema'
import TimeZone from './TimeZoneSchema'
import AwsCommunityAmi from './AwsCommunityAmiSchema'
import AwsInstance from './AwsInstanceSchema'
import AwsVolume from './AwsVolumeSchema'
import AwsAmi from './AwsAmiSchema'
import AwsRegion from './AwsRegionSchema'
import AwsAvailabilityZone from './AwsAvailabilityZoneSchema'
import Activity from './ActivitySchema'
import Quote from './QuoteSchema'
import AwsAccount from './AwsAccountSchema'
import Tax from './TaxSchema'
import Category from './CategorySchema'
import Product from './ProductSchema'
import PeriodicityPreset from './PeriodicityPresetSchema'

export class Schemas {
  constructor (params) {
    this.app = App
    this.apparience = Apparience
    this.company = Company
    this.config = Config
    this.exchange = Exchange
    this.lead = Lead
    this.role = Role
    this.service = Service
    this.system = System
    this.token = Token
    this.user = User
    this.department = Department
    this.template = Template
    this.accessPolicy = AccessPolicy
    this.country = Country
    this.currency = Currency
    this.timeZone = TimeZone
    this.awsCommunityAmi = AwsCommunityAmi
    this.awsInstance = AwsInstance
    this.awsVolume = AwsVolume
    this.awsAmi = AwsAmi
    this.awsRegion = AwsRegion
    this.awsAvailabilityZone = AwsAvailabilityZone
    this.activity = Activity
    this.quote = Quote
    this.awsAccount = AwsAccount
    this.tax = Tax
    this.category = Category
    this.product = Product
    this.periodicityPreset = PeriodicityPreset
  }
}
