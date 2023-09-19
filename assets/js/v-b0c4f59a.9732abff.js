"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[58469],{71154:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-b0c4f59a","path":"/devices/66492-001.html","title":"Kwikset 66492-001 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Kwikset 66492-001 control via MQTT","description":"Integrate your Kwikset 66492-001 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-03-09T19:04:35.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Factory Reset","slug":"factory-reset","link":"#factory-reset","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Lock","slug":"lock","link":"#lock","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Action source name (enum)","slug":"action-source-name-enum","link":"#action-source-name-enum","children":[]},{"level":3,"title":"Action user (numeric)","slug":"action-user-numeric","link":"#action-user-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1695143833000},"filePathRelative":"devices/66492-001.md"}')},58531:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var i=o(166252);const a=o.p+"assets/img/66492-001_pairing.0a589483.jpg",n=(0,i._)("h1",{id:"kwikset-66492-001",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#kwikset-66492-001","aria-hidden":"true"},"#"),(0,i.Uk)(" Kwikset 66492-001")],-1),c=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"66492-001")],-1),d=(0,i._)("td",null,"Vendor",-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Home connect smart lock conversion kit")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"lock (state, lock_state), battery, action, action_source_name, action_user, linkquality")],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/66492-001.jpg",alt:"Kwikset 66492-001"})])],-1),h=(0,i.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><img src="'+a+'" width="30%" height="30%"><ul><li>Pair the lock by pressing the &quot;A&quot; button 4 times.</li><li>Unpair the lock by pressing the &quot;B&quot; button 9 times.</li></ul><h3 id="factory-reset" tabindex="-1"><a class="header-anchor" href="#factory-reset" aria-hidden="true">#</a> Factory Reset</h3><ol><li>Factory reset the lock by removing the battery pack.</li><li>Press and HOLD the &quot;Program&quot; button while reinserting the battery pack.</li><li>Release button shortly after battery pack is installed. The status LED will flash red and green.</li><li>Press the &quot;Program&quot; button once more. The latch bolt will extend and retract to learn the orientation of the door. The status LED will flash green for sucess or solid red for 5 seconds to indicate failure.</li></ol>',6),p=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>state</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;state&quot;: &quot;UNLOCK&quot;}</code>. To read the current state of this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. This lock exposes a lock state which can be found in the published state under the <code>lock_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_fully_locked</code>, <code>locked</code>, <code>unlocked</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action on the lock. Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>unknown</code>, <code>lock</code>, <code>unlock</code>, <code>lock_failure_invalid_pin_or_id</code>, <code>lock_failure_invalid_schedule</code>, <code>unlock_failure_invalid_pin_or_id</code>, <code>unlock_failure_invalid_schedule</code>, <code>one_touch_lock</code>, <code>key_lock</code>, <code>key_unlock</code>, <code>auto_lock</code>, <code>schedule_lock</code>, <code>schedule_unlock</code>, <code>manual_lock</code>, <code>manual_unlock</code>, <code>non_access_user_operational_event</code>.</p><h3 id="action-source-name-enum" tabindex="-1"><a class="header-anchor" href="#action-source-name-enum" aria-hidden="true">#</a> Action source name (enum)</h3><p>Source of the triggered action on the lock. Value can be found in the published state on the <code>action_source_name</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>keypad</code>, <code>rfid</code>, <code>manual</code>, <code>rf</code>.</p><h3 id="action-user-numeric" tabindex="-1"><a class="header-anchor" href="#action-user-numeric" aria-hidden="true">#</a> Action user (numeric)</h3><p>ID of user that triggered the action on the lock. Value can be found in the published state on the <code>action_user</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),k={},m=(0,o(983744).Z)(k,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),n,(0,i._)("table",null,[c,(0,i._)("tbody",null,[l,(0,i._)("tr",null,[d,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Kwikset"},{default:(0,i.w5)((()=>[(0,i.Uk)("Kwikset")])),_:1})])]),r,s,u])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,i.kq)(" Notes END: Do not edit below this line "),p])}]])}}]);