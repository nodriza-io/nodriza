'use strict'

import { App } from './AppApi'
import { Apparience } from './ApparienceApi'
import { AwsBill } from './AwsBillApi'
import { AwsInstance } from './AwsInstanceApi'
import { AwsUsageReport } from './AwsUsageReportApi'
import { Company } from './CompanyApi'
import { Config } from './ConfigApi'
import { Exchange } from './ExchangeApi'
import { Invoice } from './InvoiceApi'
import { Lead } from './LeadApi'
import { Plan } from './PlanApi'
import { PurchaseOrder } from './PurchaseOrderApi'
import { Quote } from './QuoteApi'
import { Role } from './RoleApi'
import { Service } from './ServiceApi'
import { Signature } from './SignatureApi'
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
import { AwsAccount } from './AwsAccountApi'
import { Tax } from './TaxApi'
import { Category } from './CategoryApi'
import { Product } from './ProductApi'
import { CostCenter } from './CostCenterApi'
import { AwsIopsMonthProvisioned } from './AwsIopsMonthProvisionedApi'
import { SystemProcess } from './SystemProcessApi'
import { CronPreset } from './CronPresetApi'
import { AwsRecord } from './AwsRecordApi'
import { Contract } from './ContractApi'
import { RecurringInvoice } from './RecurringInvoiceApi'
import { Commission } from './CommissionApi'
import { Case } from './CaseApi'
import { Message } from './MessageApi'
import { FileData } from './FileDataApi'
import { Article } from './ArticleApi'
import { Conversation } from './ConversationApi'

export class Apis {
  constructor (params) {
    this.app = new App(params)
    this.apparience = new Apparience(params)
    this.awsBill = new AwsBill(params)
    this.awsInstance = new AwsInstance(params)
    this.awsUsageReport = new AwsUsageReport(params)
    this.company = new Company(params)
    this.config = new Config(params)
    this.exchange = new Exchange(params)
    this.invoice = new Invoice(params)
    this.lead = new Lead(params)
    this.plan = new Plan(params)
    this.purchaseOrder = new PurchaseOrder(params)
    this.quote = new Quote(params)
    this.role = new Role(params)
    this.service = new Service(params)
    this.signature = new Signature(params)
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
    this.awsAccount = new AwsAccount(params)
    this.tax = new Tax(params)
    this.category = new Category(params)
    this.product = new Product(params)
    this.costCenter = new CostCenter(params)
    this.awsIopsMonthProvisioned = new AwsIopsMonthProvisioned(params)
    this.systemProcess = new SystemProcess(params)
    this.cronPreset = new CronPreset(params)
    this.awsRecord = new AwsRecord(params)
    this.contract = new Contract(params)
    this.recurringInvoice = new RecurringInvoice(params)
    this.commission = new Commission(params)
    this.case = new Case(params)
    this.message = new Message(params)
    this.fileData = new FileData(params)
    this.article = new Article(params)
    this.conversation = new Conversation(params)
  }
}
