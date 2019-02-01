'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Apis = undefined;

var _AccountApi = require('./AccountApi');

var _AppApi = require('./AppApi');

var _ApparienceApi = require('./ApparienceApi');

var _ArticleApi = require('./ArticleApi');

var _CategoryApi = require('./CategoryApi');

var _ChatbotApi = require('./ChatbotApi');

var _CompanyApi = require('./CompanyApi');

var _ConfigApi = require('./ConfigApi');

var _ConfirmationCodeApi = require('./ConfirmationCodeApi');

var _ContractApi = require('./ContractApi');

var _DocumentApi = require('./DocumentApi');

var _EmailApi = require('./EmailApi');

var _ExchangeApi = require('./ExchangeApi');

var _InvoiceApi = require('./InvoiceApi');

var _LeadApi = require('./LeadApi');

var _PaymentReceivedApi = require('./PaymentReceivedApi');

var _PayuApi = require('./PayuApi');

var _PermissionApi = require('./PermissionApi');

var _ProductApi = require('./ProductApi');

var _ProposalApi = require('./ProposalApi');

var _ProposalVersionApi = require('./ProposalVersionApi');

var _PurchaseOrderApi = require('./PurchaseOrderApi');

var _RecurringInvoiceApi = require('./RecurringInvoiceApi');

var _RoleLibraryApi = require('./RoleLibraryApi');

var _RoleApi = require('./RoleApi');

var _ServiceApi = require('./ServiceApi');

var _SignatureApi = require('./SignatureApi');

var _SnippetApi = require('./SnippetApi');

var _StripeApi = require('./StripeApi');

var _TemplateGalleryApi = require('./TemplateGalleryApi');

var _TokenApi = require('./TokenApi');

var _UrlShortApi = require('./UrlShortApi');

var _UserApi = require('./UserApi');

var _DepartmentApi = require('./DepartmentApi');

var _TemplateApi = require('./TemplateApi');

var _AccessPolicyApi = require('./AccessPolicyApi');

var _CountryApi = require('./CountryApi');

var _CurrencyApi = require('./CurrencyApi');

var _TimeZoneApi = require('./TimeZoneApi');

var _CronApi = require('./CronApi');

var _LogApi = require('./LogApi');

var _ActivityApi = require('./ActivityApi');

var _TaxApi = require('./TaxApi');

var _CronPresetApi = require('./CronPresetApi');

var _CommissionApi = require('./CommissionApi');

var _SupportCaseApi = require('./SupportCaseApi');

var _MessageApi = require('./MessageApi');

var _ConversationApi = require('./ConversationApi');

var _PaymentModeApi = require('./PaymentModeApi');

var _ContractTypeApi = require('./ContractTypeApi');

var _ReportApi = require('./ReportApi');

var _FileDataApi = require('./FileDataApi');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Apis = exports.Apis = function Apis(params) {
  _classCallCheck(this, Apis);

  this.account = new _AccountApi.Account(params);
  this.app = new _AppApi.App(params);
  this.apparience = new _ApparienceApi.Apparience(params);
  this.article = new _ArticleApi.Article(params);
  this.category = new _CategoryApi.Category(params);
  this.chatbot = new _ChatbotApi.Chatbot(params);
  this.company = new _CompanyApi.Company(params);
  this.config = new _ConfigApi.Config(params);
  this.confirmationCode = new _ConfirmationCodeApi.ConfirmationCode(params);
  this.contract = new _ContractApi.Contract(params);
  this.document = new _DocumentApi.Document(params);
  this.email = new _EmailApi.Email(params);
  this.exchange = new _ExchangeApi.Exchange(params);
  this.invoice = new _InvoiceApi.Invoice(params);
  this.lead = new _LeadApi.Lead(params);
  this.paymentReceived = new _PaymentReceivedApi.PaymentReceived(params);
  this.payu = new _PayuApi.Payu(params);
  this.permission = new _PermissionApi.Permission(params);
  this.product = new _ProductApi.Product(params);
  this.proposal = new _ProposalApi.Proposal(params);
  this.proposalVersion = new _ProposalVersionApi.ProposalVersion(params);
  this.purchaseOrder = new _PurchaseOrderApi.PurchaseOrder(params);
  this.recurringInvoice = new _RecurringInvoiceApi.RecurringInvoice(params);
  this.roleLibrary = new _RoleLibraryApi.RoleLibrary(params);
  this.role = new _RoleApi.Role(params);
  this.service = new _ServiceApi.Service(params);
  this.signature = new _SignatureApi.Signature(params);
  this.snippet = new _SnippetApi.Snippet(params);
  this.stripe = new _StripeApi.Stripe(params);
  this.templateGallery = new _TemplateGalleryApi.TemplateGallery(params);
  this.token = new _TokenApi.Token(params);
  this.urlShort = new _UrlShortApi.UrlShort(params);
  this.user = new _UserApi.User(params);
  this.department = new _DepartmentApi.Department(params);
  this.template = new _TemplateApi.Template(params);
  this.accessPolicy = new _AccessPolicyApi.AccessPolicy(params);
  this.country = new _CountryApi.Country(params);
  this.currency = new _CurrencyApi.Currency(params);
  this.timeZone = new _TimeZoneApi.TimeZone(params);
  this.cron = new _CronApi.Cron(params);
  this.log = new _LogApi.Log(params);
  this.activity = new _ActivityApi.Activity(params);
  this.tax = new _TaxApi.Tax(params);
  this.cronPreset = new _CronPresetApi.CronPreset(params);
  this.commission = new _CommissionApi.Commission(params);
  this.supportCase = new _SupportCaseApi.SupportCase(params);
  this.message = new _MessageApi.Message(params);
  this.conversation = new _ConversationApi.Conversation(params);
  this.paymentMode = new _PaymentModeApi.PaymentMode(params);
  this.contractType = new _ContractTypeApi.ContractType(params);
  this.report = new _ReportApi.Report(params);
  this.fileData = new _FileDataApi.FileData(params);
};