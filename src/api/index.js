'use strict'

import { App } from './AppApi'
import { Apparience } from './ApparienceApi'
import { Company } from './CompanyApi'
import { Config } from './ConfigApi'
import { Exchange } from './ExchangeApi'
import { Lead } from './LeadApi'
import { Role } from './RoleApi'
import { Service } from './ServiceApi'
import { Token } from './TokenApi'
import { User } from './UserApi'
import { Department } from './DepartmentApi'
import { Template } from './TemplateApi'
import { AccessPolicy } from './AccessPolicyApi'
import { Country } from './CountryApi'
import { Currency } from './CurrencyApi'
import { TimeZone } from './TimeZoneApi'
import { AwsCommunityAmi } from './AwsCommunityAmiApi'
import { AwsInstance } from './AwsInstanceApi'
import { AwsVolume } from './AwsVolumeApi'
import { AwsAmi } from './AwsAmiApi'
import { AwsRegion } from './AwsRegionApi'
import { AwsAvailabilityZone } from './AwsAvailabilityZoneApi'
import { AwsElasticIp } from './AwsElasticIpApi'
import { Activity } from './ActivityApi'
import { Quote } from './QuoteApi'
import { AwsAccount } from './AwsAccountApi'
import { Tax } from './TaxApi'
import { Category } from './CategoryApi'
import { Product } from './ProductApi'
import { PeriodicityPreset } from './PeriodicityPresetApi'
import { CostCenter } from './CostCenterApi'
import { AwsDataTransfer } from './AwsDataTransferApi'
import { Plan } from './PlanApi'
import { AwsIopsMonthProvisioned } from './AwsIopsMonthProvisionedApi'
import { SystemProcess } from './SystemProcessApi'
import { Schedule } from './ScheduleApi'
import { ScheduleLog } from './ScheduleLogApi'

export class Apis {
  constructor (params) {
    this.app = new App(params)
    this.apparience = new Apparience(params)
    this.company = new Company(params)
    this.config = new Config(params)
    this.exchange = new Exchange(params)
    this.lead = new Lead(params)
    this.role = new Role(params)
    this.service = new Service(params)
    this.token = new Token(params)
    this.user = new User(params)
    this.department = new Department(params)
    this.template = new Template(params)
    this.accessPolicy = new AccessPolicy(params)
    this.country = new Country(params)
    this.currency = new Currency(params)
    this.timeZone = new TimeZone(params)
    this.awsCommunityAmi = new AwsCommunityAmi(params)
    this.awsInstance = new AwsInstance(params)
    this.awsVolume = new AwsVolume(params)
    this.awsAmi = new AwsAmi(params)
    this.awsRegion = new AwsRegion(params)
    this.awsAvailabilityZone = new AwsAvailabilityZone(params)
    this.awsElasticIp = new AwsElasticIp(params)
    this.activity = new Activity(params)
    this.quote = new Quote(params)
    this.awsAccount = new AwsAccount(params)
    this.tax = new Tax(params)
    this.category = new Category(params)
    this.product = new Product(params)
    this.periodicityPreset = new PeriodicityPreset(params)
    this.costCenter = new CostCenter(params)
    this.awsDataTransfer = new AwsDataTransfer(params)
    this.plan = new Plan(params)
    this.awsIopsMonthProvisioned = new AwsIopsMonthProvisioned(params)
    this.systemProcess = new SystemProcess(params)
    this.schedule = new Schedule(params)
    this.scheduleLog = new ScheduleLog(params)
  }
}
