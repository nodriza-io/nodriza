'use strict'

import App from './AppSchema'
import Apparience from './ApparienceSchema'
import AwsInstance from './AwsInstanceSchema'
import Company from './CompanySchema'
import Config from './ConfigSchema'
import Exchange from './ExchangeSchema'
import Lead from './LeadSchema'
import Plan from './PlanSchema'
import Role from './RoleSchema'
import Service from './ServiceSchema'
import Token from './TokenSchema'
import User from './UserSchema'
import Department from './DepartmentSchema'
import Template from './TemplateSchema'
import AccessPolicy from './AccessPolicySchema'
import Country from './CountrySchema'
import Currency from './CurrencySchema'
import TimeZone from './TimeZoneSchema'
import AwsCommunityAmi from './AwsCommunityAmiSchema'
import AwsVolume from './AwsVolumeSchema'
import AwsAmi from './AwsAmiSchema'
import AwsRegion from './AwsRegionSchema'
import AwsAvailabilityZone from './AwsAvailabilityZoneSchema'
import AwsElasticIp from './AwsElasticIpSchema'
import Cron from './CronSchema'
import Log from './LogSchema'
import Activity from './ActivitySchema'
import Quote from './QuoteSchema'
import AwsAccount from './AwsAccountSchema'
import Tax from './TaxSchema'
import Category from './CategorySchema'
import Product from './ProductSchema'
import CostCenter from './CostCenterSchema'
import AwsDataTransfer from './AwsDataTransferSchema'
import AwsIopsMonthProvisioned from './AwsIopsMonthProvisionedSchema'
import SystemProcess from './SystemProcessSchema'
import CronPreset from './CronPresetSchema'

export class Schemas {
  constructor (params) {
    this.app = App
    this.apparience = Apparience
    this.awsInstance = AwsInstance
    this.company = Company
    this.config = Config
    this.exchange = Exchange
    this.lead = Lead
    this.plan = Plan
    this.role = Role
    this.service = Service
    this.token = Token
    this.user = User
    this.department = Department
    this.template = Template
    this.accessPolicy = AccessPolicy
    this.country = Country
    this.currency = Currency
    this.timeZone = TimeZone
    this.awsCommunityAmi = AwsCommunityAmi
    this.awsVolume = AwsVolume
    this.awsAmi = AwsAmi
    this.awsRegion = AwsRegion
    this.awsAvailabilityZone = AwsAvailabilityZone
    this.awsElasticIp = AwsElasticIp
    this.cron = Cron
    this.log = Log
    this.activity = Activity
    this.quote = Quote
    this.awsAccount = AwsAccount
    this.tax = Tax
    this.category = Category
    this.product = Product
    this.costCenter = CostCenter
    this.awsDataTransfer = AwsDataTransfer
    this.awsIopsMonthProvisioned = AwsIopsMonthProvisioned
    this.systemProcess = SystemProcess
    this.cronPreset = CronPreset
  }
}
