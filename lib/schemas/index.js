'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Schemas = void 0;

var _AccountSchema = _interopRequireDefault(require("./AccountSchema"));

var _AppSchema = _interopRequireDefault(require("./AppSchema"));

var _ApparienceSchema = _interopRequireDefault(require("./ApparienceSchema"));

var _ArticleSchema = _interopRequireDefault(require("./ArticleSchema"));

var _ArticlebotSchema = _interopRequireDefault(require("./ArticlebotSchema"));

var _CategorySchema = _interopRequireDefault(require("./CategorySchema"));

var _CompanySchema = _interopRequireDefault(require("./CompanySchema"));

var _ConfigSchema = _interopRequireDefault(require("./ConfigSchema"));

var _ConfirmationCodeSchema = _interopRequireDefault(require("./ConfirmationCodeSchema"));

var _ContractSchema = _interopRequireDefault(require("./ContractSchema"));

var _CustomApiSchema = _interopRequireDefault(require("./CustomApiSchema"));

var _DocumentSchema = _interopRequireDefault(require("./DocumentSchema"));

var _EmailSchema = _interopRequireDefault(require("./EmailSchema"));

var _ExchangeSchema = _interopRequireDefault(require("./ExchangeSchema"));

var _FileDataSchema = _interopRequireDefault(require("./FileDataSchema"));

var _InvoiceSchema = _interopRequireDefault(require("./InvoiceSchema"));

var _LeadSchema = _interopRequireDefault(require("./LeadSchema"));

var _Oauth2Schema = _interopRequireDefault(require("./Oauth2Schema"));

var _ObservationSchema = _interopRequireDefault(require("./ObservationSchema"));

var _PaymentReceivedSchema = _interopRequireDefault(require("./PaymentReceivedSchema"));

var _PayuSchema = _interopRequireDefault(require("./PayuSchema"));

var _PermissionSchema = _interopRequireDefault(require("./PermissionSchema"));

var _ProductSchema = _interopRequireDefault(require("./ProductSchema"));

var _ProposalSchema = _interopRequireDefault(require("./ProposalSchema"));

var _ProposalVersionSchema = _interopRequireDefault(require("./ProposalVersionSchema"));

var _ProposalbotSchema = _interopRequireDefault(require("./ProposalbotSchema"));

var _PurchaseOrderSchema = _interopRequireDefault(require("./PurchaseOrderSchema"));

var _RecurringInvoiceSchema = _interopRequireDefault(require("./RecurringInvoiceSchema"));

var _ReportSchema = _interopRequireDefault(require("./ReportSchema"));

var _ReservationSchema = _interopRequireDefault(require("./ReservationSchema"));

var _RoleLibrarySchema = _interopRequireDefault(require("./RoleLibrarySchema"));

var _RoleSchema = _interopRequireDefault(require("./RoleSchema"));

var _ServiceSchema = _interopRequireDefault(require("./ServiceSchema"));

var _SignatureSchema = _interopRequireDefault(require("./SignatureSchema"));

var _SnippetSchema = _interopRequireDefault(require("./SnippetSchema"));

var _StripeSchema = _interopRequireDefault(require("./StripeSchema"));

var _TemplateGallerySchema = _interopRequireDefault(require("./TemplateGallerySchema"));

var _TokenSchema = _interopRequireDefault(require("./TokenSchema"));

var _UrlShortSchema = _interopRequireDefault(require("./UrlShortSchema"));

var _UserSchema = _interopRequireDefault(require("./UserSchema"));

var _WebhookSchema = _interopRequireDefault(require("./WebhookSchema"));

var _DepartmentSchema = _interopRequireDefault(require("./DepartmentSchema"));

var _TemplateSchema = _interopRequireDefault(require("./TemplateSchema"));

var _AccessPolicySchema = _interopRequireDefault(require("./AccessPolicySchema"));

var _CountrySchema = _interopRequireDefault(require("./CountrySchema"));

var _CurrencySchema = _interopRequireDefault(require("./CurrencySchema"));

var _TimeZoneSchema = _interopRequireDefault(require("./TimeZoneSchema"));

var _CronSchema = _interopRequireDefault(require("./CronSchema"));

var _LogSchema = _interopRequireDefault(require("./LogSchema"));

var _ActivitySchema = _interopRequireDefault(require("./ActivitySchema"));

var _TaxSchema = _interopRequireDefault(require("./TaxSchema"));

var _CronPresetSchema = _interopRequireDefault(require("./CronPresetSchema"));

var _CommissionSchema = _interopRequireDefault(require("./CommissionSchema"));

var _SupportCaseSchema = _interopRequireDefault(require("./SupportCaseSchema"));

var _MessageSchema = _interopRequireDefault(require("./MessageSchema"));

var _ConversationSchema = _interopRequireDefault(require("./ConversationSchema"));

var _PaymentModeSchema = _interopRequireDefault(require("./PaymentModeSchema"));

var _ContractTypeSchema = _interopRequireDefault(require("./ContractTypeSchema"));

var _CommentSchema = _interopRequireDefault(require("./CommentSchema"));

var _ReportPeriodSchema = _interopRequireDefault(require("./ReportPeriodSchema"));

var _BackupSchema = _interopRequireDefault(require("./BackupSchema"));

var _TrashSchema = _interopRequireDefault(require("./TrashSchema"));

var _LinkedAccountSchema = _interopRequireDefault(require("./LinkedAccountSchema"));

var _PackageSchema = _interopRequireDefault(require("./PackageSchema"));

var _CalendarSchema = _interopRequireDefault(require("./CalendarSchema"));

var _HelperBuilderSchema = _interopRequireDefault(require("./HelperBuilderSchema"));

var _ProviderSchema = _interopRequireDefault(require("./ProviderSchema"));

var _UserActivitySchema = _interopRequireDefault(require("./UserActivitySchema"));

var _ContactSchema = _interopRequireDefault(require("./ContactSchema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Schemas = /*#__PURE__*/_createClass(function Schemas(params) {
  _classCallCheck(this, Schemas);

  this.account = _AccountSchema["default"];
  this.app = _AppSchema["default"];
  this.apparience = _ApparienceSchema["default"];
  this.article = _ArticleSchema["default"];
  this.articlebot = _ArticlebotSchema["default"];
  this.category = _CategorySchema["default"];
  this.company = _CompanySchema["default"];
  this.config = _ConfigSchema["default"];
  this.confirmationCode = _ConfirmationCodeSchema["default"];
  this.contract = _ContractSchema["default"];
  this.customApi = _CustomApiSchema["default"];
  this.document = _DocumentSchema["default"];
  this.email = _EmailSchema["default"];
  this.exchange = _ExchangeSchema["default"];
  this.fileData = _FileDataSchema["default"];
  this.invoice = _InvoiceSchema["default"];
  this.lead = _LeadSchema["default"];
  this.oauth2 = _Oauth2Schema["default"];
  this.observation = _ObservationSchema["default"];
  this.paymentReceived = _PaymentReceivedSchema["default"];
  this.payu = _PayuSchema["default"];
  this.permission = _PermissionSchema["default"];
  this.product = _ProductSchema["default"];
  this.proposal = _ProposalSchema["default"];
  this.proposalVersion = _ProposalVersionSchema["default"];
  this.proposalbot = _ProposalbotSchema["default"];
  this.purchaseOrder = _PurchaseOrderSchema["default"];
  this.recurringInvoice = _RecurringInvoiceSchema["default"];
  this.report = _ReportSchema["default"];
  this.reservation = _ReservationSchema["default"];
  this.roleLibrary = _RoleLibrarySchema["default"];
  this.role = _RoleSchema["default"];
  this.service = _ServiceSchema["default"];
  this.signature = _SignatureSchema["default"];
  this.snippet = _SnippetSchema["default"];
  this.stripe = _StripeSchema["default"];
  this.templateGallery = _TemplateGallerySchema["default"];
  this.token = _TokenSchema["default"];
  this.urlShort = _UrlShortSchema["default"];
  this.user = _UserSchema["default"];
  this.webhook = _WebhookSchema["default"];
  this.department = _DepartmentSchema["default"];
  this.template = _TemplateSchema["default"];
  this.accessPolicy = _AccessPolicySchema["default"];
  this.country = _CountrySchema["default"];
  this.currency = _CurrencySchema["default"];
  this.timeZone = _TimeZoneSchema["default"];
  this.cron = _CronSchema["default"];
  this.log = _LogSchema["default"];
  this.activity = _ActivitySchema["default"];
  this.tax = _TaxSchema["default"];
  this.cronPreset = _CronPresetSchema["default"];
  this.commission = _CommissionSchema["default"];
  this.supportCase = _SupportCaseSchema["default"];
  this.message = _MessageSchema["default"];
  this.conversation = _ConversationSchema["default"];
  this.paymentMode = _PaymentModeSchema["default"];
  this.contractType = _ContractTypeSchema["default"];
  this.comment = _CommentSchema["default"];
  this.reportPeriod = _ReportPeriodSchema["default"];
  this.backup = _BackupSchema["default"];
  this.trash = _TrashSchema["default"];
  this.linkedAccount = _LinkedAccountSchema["default"];
  this["package"] = _PackageSchema["default"];
  this.calendar = _CalendarSchema["default"];
  this.helperBuilder = _HelperBuilderSchema["default"];
  this.provider = _ProviderSchema["default"];
  this.userActivity = _UserActivitySchema["default"];
  this.contact = _ContactSchema["default"];
});

exports.Schemas = Schemas;