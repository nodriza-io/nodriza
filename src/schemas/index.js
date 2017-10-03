'use strict'

import App from './AppSchema'
import Apparience from './ApparienceSchema'
import Company from './CompanySchema'
import Config from './ConfigSchema'
import Role from './RoleSchema'
import Service from './ServiceSchema'
import User from './UserSchema'
import Template from './TemplateSchema'
import AccessPolicy from './AccessPolicySchema'
<<<<<<< HEAD
import Token from './TokenSchema'
=======
>>>>>>> 02cc83f91195a26965f2d54750fc37966451081d
import Department from './DepartmentSchema'
import Cron from './CronSchema'
import CronLog from './CronLogSchema'
import CronPreset from './CronPresetSchema'
import Country from './CountrySchema'

export class Schemas {
  constructor (params) {
    this.app = App
    this.apparience = Apparience
    this.company = Company
    this.config = Config
    this.role = Role
    this.service = Service
    this.user = User
    this.template = Template
    this.accessPolicy = AccessPolicy
<<<<<<< HEAD
    this.token = Token
=======
>>>>>>> 02cc83f91195a26965f2d54750fc37966451081d
    this.department = Department
    this.cron = Cron
    this.cronLog = CronLog
    this.cronPreset = CronPreset
    this.country = Country
  }
}
