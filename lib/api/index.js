'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Apis = void 0;

var _AccountApi = require("./AccountApi");

var _AppApi = require("./AppApi");

var _ApparienceApi = require("./ApparienceApi");

var _ArticleApi = require("./ArticleApi");

var _ArticlebotApi = require("./ArticlebotApi");

var _CategoryApi = require("./CategoryApi");

var _CompanyApi = require("./CompanyApi");

var _ConfigApi = require("./ConfigApi");

var _ConfirmationCodeApi = require("./ConfirmationCodeApi");

var _ContractApi = require("./ContractApi");

var _CustomApiApi = require("./CustomApiApi");

var _DocumentApi = require("./DocumentApi");

var _EmailApi = require("./EmailApi");

var _ExchangeApi = require("./ExchangeApi");

var _FileDataApi = require("./FileDataApi");

var _InvoiceApi = require("./InvoiceApi");

var _LeadApi = require("./LeadApi");

var _Oauth2Api = require("./Oauth2Api");

var _ObservationApi = require("./ObservationApi");

var _PaymentReceivedApi = require("./PaymentReceivedApi");

var _PayuApi = require("./PayuApi");

var _PermissionApi = require("./PermissionApi");

var _ProductApi = require("./ProductApi");

var _ProposalApi = require("./ProposalApi");

var _ProposalVersionApi = require("./ProposalVersionApi");

var _ProposalbotApi = require("./ProposalbotApi");

var _PurchaseOrderApi = require("./PurchaseOrderApi");

var _RecurringInvoiceApi = require("./RecurringInvoiceApi");

var _ReportApi = require("./ReportApi");

var _ReservationApi = require("./ReservationApi");

var _RoleLibraryApi = require("./RoleLibraryApi");

var _RoleApi = require("./RoleApi");

var _ServiceApi = require("./ServiceApi");

var _SignatureApi = require("./SignatureApi");

var _SnippetApi = require("./SnippetApi");

var _StripeApi = require("./StripeApi");

var _TemplateGalleryApi = require("./TemplateGalleryApi");

var _TokenApi = require("./TokenApi");

var _UrlShortApi = require("./UrlShortApi");

var _UserApi = require("./UserApi");

var _WebhookApi = require("./WebhookApi");

var _DepartmentApi = require("./DepartmentApi");

var _TemplateApi = require("./TemplateApi");

var _AccessPolicyApi = require("./AccessPolicyApi");

var _CountryApi = require("./CountryApi");

var _CurrencyApi = require("./CurrencyApi");

var _TimeZoneApi = require("./TimeZoneApi");

var _CronApi = require("./CronApi");

var _LogApi = require("./LogApi");

var _ActivityApi = require("./ActivityApi");

var _TaxApi = require("./TaxApi");

var _CronPresetApi = require("./CronPresetApi");

var _CommissionApi = require("./CommissionApi");

var _SupportCaseApi = require("./SupportCaseApi");

var _MessageApi = require("./MessageApi");

var _ConversationApi = require("./ConversationApi");

var _PaymentModeApi = require("./PaymentModeApi");

var _ContractTypeApi = require("./ContractTypeApi");

var _CommentApi = require("./CommentApi");

var _ReportPeriodApi = require("./ReportPeriodApi");

var _BackupApi = require("./BackupApi");

var _TrashApi = require("./TrashApi");

var _LinkedAccountApi = require("./LinkedAccountApi");

var _PackageApi = require("./PackageApi");

var _CalendarApi = require("./CalendarApi");

var _HelperBuilderApi = require("./HelperBuilderApi");

var _ProviderApi = require("./ProviderApi");

var _UserActivityApi = require("./UserActivityApi");

var _ContactApi = require("./ContactApi");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Apis = /*#__PURE__*/_createClass(function Apis(params) {
  _classCallCheck(this, Apis);

  this.account = new _AccountApi.Account(params);
  this.app = new _AppApi.App(params);
  this.apparience = new _ApparienceApi.Apparience(params);
  this.article = new _ArticleApi.Article(params);
  this.articlebot = new _ArticlebotApi.Articlebot(params);
  this.category = new _CategoryApi.Category(params);
  this.company = new _CompanyApi.Company(params);
  this.config = new _ConfigApi.Config(params);
  this.confirmationCode = new _ConfirmationCodeApi.ConfirmationCode(params);
  this.contract = new _ContractApi.Contract(params);
  this.customApi = new _CustomApiApi.CustomApi(params);
  this.document = new _DocumentApi.Document(params);
  this.email = new _EmailApi.Email(params);
  this.exchange = new _ExchangeApi.Exchange(params);
  this.fileData = new _FileDataApi.FileData(params);
  this.invoice = new _InvoiceApi.Invoice(params);
  this.lead = new _LeadApi.Lead(params);
  this.oauth2 = new _Oauth2Api.Oauth2(params);
  this.observation = new _ObservationApi.Observation(params);
  this.paymentReceived = new _PaymentReceivedApi.PaymentReceived(params);
  this.payu = new _PayuApi.Payu(params);
  this.permission = new _PermissionApi.Permission(params);
  this.product = new _ProductApi.Product(params);
  this.proposal = new _ProposalApi.Proposal(params);
  this.proposalVersion = new _ProposalVersionApi.ProposalVersion(params);
  this.proposalbot = new _ProposalbotApi.Proposalbot(params);
  this.purchaseOrder = new _PurchaseOrderApi.PurchaseOrder(params);
  this.recurringInvoice = new _RecurringInvoiceApi.RecurringInvoice(params);
  this.report = new _ReportApi.Report(params);
  this.reservation = new _ReservationApi.Reservation(params);
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
  this.webhook = new _WebhookApi.Webhook(params);
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
  this.comment = new _CommentApi.Comment(params);
  this.reportPeriod = new _ReportPeriodApi.ReportPeriod(params);
  this.backup = new _BackupApi.Backup(params);
  this.trash = new _TrashApi.Trash(params);
  this.linkedAccount = new _LinkedAccountApi.LinkedAccount(params);
  this["package"] = new _PackageApi.Package(params);
  this.calendar = new _CalendarApi.Calendar(params);
  this.helperBuilder = new _HelperBuilderApi.HelperBuilder(params);
  this.provider = new _ProviderApi.Provider(params);
  this.userActivity = new _UserActivityApi.UserActivity(params);
  this.contact = new _ContactApi.Contact(params);
});

exports.Apis = Apis;