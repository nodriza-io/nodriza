'use strict'

import App from './AppSchema'
import Apparience from './ApparienceSchema'
import AwsBill from './AwsBillSchema'
import AwsInstance from './AwsInstanceSchema'
import AwsUsageReport from './AwsUsageReportSchema'
import Company from './CompanySchema'
import Config from './ConfigSchema'
import Exchange from './ExchangeSchema'
import Invoice from './InvoiceSchema'
import Lead from './LeadSchema'
import Plan from './PlanSchema'
import PurchaseOrder from './PurchaseOrderSchema'
import Quote from './QuoteSchema'
import Role from './RoleSchema'
import Service from './ServiceSchema'
import Signature from './SignatureSchema'
import Template from './TemplateSchema'
import Token from './TokenSchema'
import User from './UserSchema'
import Department from './DepartmentSchema'
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
import AwsAccount from './AwsAccountSchema'
import Tax from './TaxSchema'
import Category from './CategorySchema'
import Product from './ProductSchema'
import CostCenter from './CostCenterSchema'
import AwsIopsMonthProvisioned from './AwsIopsMonthProvisionedSchema'
import SystemProcess from './SystemProcessSchema'
import CronPreset from './CronPresetSchema'
import AwsRecord from './AwsRecordSchema'
import Contract from './ContractSchema'
import RecurringInvoice from './RecurringInvoiceSchema'
import Commission from './CommissionSchema'
import Case from './CaseSchema'
import Message from './MessageSchema'
import FileData from './FileDataSchema'
import Article from './ArticleSchema'
import Conversation from './ConversationSchema'

export class Schemas {
  constructor (params) {
    this.app = App
    this.apparience = Apparience
    this.awsBill = AwsBill
    this.awsInstance = AwsInstance
    this.awsUsageReport = AwsUsageReport
    this.company = Company
    this.config = Config
    this.exchange = Exchange
    this.invoice = Invoice
    this.lead = Lead
    this.plan = Plan
    this.purchaseOrder = PurchaseOrder
    this.quote = Quote
    this.role = Role
    this.service = Service
    this.signature = Signature
    this.template = Template
    this.token = Token
    this.user = User
    this.department = Department
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
    this.awsAccount = AwsAccount
    this.tax = Tax
    this.category = Category
    this.product = Product
    this.costCenter = CostCenter
    this.awsIopsMonthProvisioned = AwsIopsMonthProvisioned
    this.systemProcess = SystemProcess
    this.cronPreset = CronPreset
    this.awsRecord = AwsRecord
    this.contract = Contract
    this.recurringInvoice = RecurringInvoice
    this.commission = Commission
    this.case = Case
    this.message = Message
    this.fileData = FileData
    this.article = Article
    this.conversation = Conversation
  }
}
