'use strict'

import { App } from './AppApi'
import { Apparience } from './ApparienceApi'
import { AwsBill } from './AwsBillApi'
import { AwsInstance } from './AwsInstanceApi'
import { Company } from './CompanyApi'
import { Config } from './ConfigApi'
import { Exchange } from './ExchangeApi'
import { Lead } from './LeadApi'
import { Plan } from './PlanApi'
import { Role } from './RoleApi'
import { Service } from './ServiceApi'
import { Template } from './TemplateApi'
import { Token } from './TokenApi'
import { User } from './UserApi'
import { Department } from './DepartmentApi'
import { AccessPolicy } from './AccessPolicyApi'
import { Country } from './CountryApi'
import { Currency } from './CurrencyApi'
import { TimeZone } from './TimeZoneApi'
import { AwsCommunityAmi } from './AwsCommunityAmiApi'
import { AwsVolume } from './AwsVolumeApi'
import { AwsAmi } from './AwsAmiApi'
import { AwsRegion } from './AwsRegionApi'
import { AwsAvailabilityZone } from './AwsAvailabilityZoneApi'
import { AwsElasticIp } from './AwsElasticIpApi'
import { Cron } from './CronApi'
import { Log } from './LogApi'
import { Activity } from './ActivityApi'
import { Quote } from './QuoteApi'
import { AwsAccount } from './AwsAccountApi'
import { Tax } from './TaxApi'
import { Category } from './CategoryApi'
import { Product } from './ProductApi'
import { CostCenter } from './CostCenterApi'
import { AwsDataTransfer } from './AwsDataTransferApi'
import { AwsIopsMonthProvisioned } from './AwsIopsMonthProvisionedApi'
import { SystemProcess } from './SystemProcessApi'
import { CronPreset } from './CronPresetApi'
import { AwsRecord } from './AwsRecordApi'
import { AwsUsageReport } from './AwsUsageReportApi'
import { Invoice } from './InvoiceApi'
import { Contact } from './ContactApi'

export class Apis {
  constructor (params) {
    this.app = new App(params)
    this.apparience = new Apparience(params)
    this.awsBill = new AwsBill(params)
    this.awsInstance = new AwsInstance(params)
    this.company = new Company(params)
    this.config = new Config(params)
    this.exchange = new Exchange(params)
    this.lead = new Lead(params)
    this.plan = new Plan(params)
    this.role = new Role(params)
    this.service = new Service(params)
    this.template = new Template(params)
    this.token = new Token(params)
    this.user = new User(params)
    this.department = new Department(params)
    this.accessPolicy = new AccessPolicy(params)
    this.country = new Country(params)
    this.currency = new Currency(params)
    this.timeZone = new TimeZone(params)
    this.awsCommunityAmi = new AwsCommunityAmi(params)
    this.awsVolume = new AwsVolume(params)
    this.awsAmi = new AwsAmi(params)
    this.awsRegion = new AwsRegion(params)
    this.awsAvailabilityZone = new AwsAvailabilityZone(params)
    this.awsElasticIp = new AwsElasticIp(params)
    this.cron = new Cron(params)
    this.log = new Log(params)
    this.activity = new Activity(params)
    this.quote = new Quote(params)
    this.awsAccount = new AwsAccount(params)
    this.tax = new Tax(params)
    this.category = new Category(params)
    this.product = new Product(params)
    this.costCenter = new CostCenter(params)
    this.awsDataTransfer = new AwsDataTransfer(params)
    this.awsIopsMonthProvisioned = new AwsIopsMonthProvisioned(params)
    this.systemProcess = new SystemProcess(params)
    this.cronPreset = new CronPreset(params)
    this.awsRecord = new AwsRecord(params)
    this.awsUsageReport = new AwsUsageReport(params)
    this.invoice = new Invoice(params)
    this.contact = new Contact(params)
  }
}
