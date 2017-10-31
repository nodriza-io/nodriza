'use strict'

import { App } from './AppApi'
import { Apparience } from './ApparienceApi'
import { Company } from './CompanyApi'
import { Config } from './ConfigApi'
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
import { Activity } from './ActivityApi'
import { Quote } from './QuoteApi'
import { Region } from './RegionApi'
import { AwsAccount } from './AwsAccountApi'
import { AvailabilityZone } from './AvailabilityZoneApi'
import { Tax } from './TaxApi'
import { Category } from './CategoryApi'

export class Apis {
  constructor (params) {
    this.app = new App(params)
    this.apparience = new Apparience(params)
    this.company = new Company(params)
    this.config = new Config(params)
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
    this.activity = new Activity(params)
    this.quote = new Quote(params)
    this.region = new Region(params)
    this.awsAccount = new AwsAccount(params)
    this.availabilityZone = new AvailabilityZone(params)
    this.tax = new Tax(params)
    this.category = new Category(params)
  }
}
