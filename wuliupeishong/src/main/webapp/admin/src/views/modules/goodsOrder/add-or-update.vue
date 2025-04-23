<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="80px"
                :style="{backgroundColor:addEditForm.addEditBoxColor}">
            <el-row>
                <el-col :span="12"  v-if="sessionTable !='cheliang'">
                    <el-form-item class="select" v-if="type!='info'"  label="车辆信息" prop="cheliangId">
                        <el-select v-model="ruleForm.cheliangId" :disabled="ro.cheliangId" filterable placeholder="请选择车辆信息" @change="cheliangChange">
                            <el-option
                                    v-for="(item,index) in cheliangOptions"
                                    v-bind:key="item.id"
                                    :label="item.cheliangName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='cheliang' ">
                    <el-form-item class="input" v-if="type!='info'"  label="车辆编号" prop="cheliangUuidNumber">
                        <el-input v-model="cheliangForm.cheliangUuidNumber"
                                  placeholder="车辆编号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="车辆编号" prop="cheliangUuidNumber">
                            <el-input v-model="ruleForm.cheliangUuidNumber"
                                      placeholder="车辆编号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='cheliang' ">
                    <el-form-item class="input" v-if="type!='info'"  label="车辆名称" prop="cheliangName">
                        <el-input v-model="cheliangForm.cheliangName"
                                  placeholder="车辆名称" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="车辆名称" prop="cheliangName">
                            <el-input v-model="ruleForm.cheliangName"
                                      placeholder="车辆名称" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='cheliang' ">
                    <el-form-item class="input" v-if="type!='info'"  label="车辆类型" prop="cheliangValue">
                        <el-input v-model="cheliangForm.cheliangValue"
                                  placeholder="车辆类型" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="车辆类型" prop="cheliangValue">
                            <el-input v-model="ruleForm.cheliangValue"
                                      placeholder="车辆类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='goods'">
                    <el-form-item class="select" v-if="type!='info'"  label="货物信息" prop="goodsId">
                        <el-select v-model="ruleForm.goodsId" :disabled="ro.goodsId" filterable placeholder="请选择货物信息" @change="goodsChange">
                            <el-option
                                    v-for="(item,index) in goodsOptions"
                                    v-bind:key="item.id"
                                    :label="item.goodsName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='goods' ">
                    <el-form-item class="input" v-if="type!='info'"  label="货物名称" prop="goodsName">
                        <el-input v-model="goodsForm.goodsName"
                                  placeholder="货物名称" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="货物名称" prop="goodsName">
                            <el-input v-model="ruleForm.goodsName"
                                      placeholder="货物名称" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='goods' ">
                    <el-form-item class="input" v-if="type!='info'"  label="货物类型" prop="goodsValue">
                        <el-input v-model="goodsForm.goodsValue"
                                  placeholder="货物类型" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="货物类型" prop="goodsValue">
                            <el-input v-model="ruleForm.goodsValue"
                                      placeholder="货物类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='goods' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.goodsPhoto" label="货物图片" prop="goodsPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (goodsForm.goodsPhoto || '').split(',')" :src="item" width="100" height="100">
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.goodsPhoto" label="货物图片" prop="goodsPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.goodsPhoto || '').split(',')" :src="item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu'">
                    <el-form-item class="select" v-if="type!='info'"  label="客户" prop="kehuId">
                        <el-select v-model="ruleForm.kehuId" :disabled="ro.kehuId" filterable placeholder="请选择客户" @change="kehuChange">
                            <el-option
                                    v-for="(item,index) in kehuOptions"
                                    v-bind:key="item.id"
                                    :label="item.kehuName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="客户编号" prop="kehuUuidNumber">
                        <el-input v-model="kehuForm.kehuUuidNumber"
                                  placeholder="客户编号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="客户编号" prop="kehuUuidNumber">
                            <el-input v-model="ruleForm.kehuUuidNumber"
                                      placeholder="客户编号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="联系人" prop="kehuName">
                        <el-input v-model="kehuForm.kehuName"
                                  placeholder="联系人" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="联系人" prop="kehuName">
                            <el-input v-model="ruleForm.kehuName"
                                      placeholder="联系人" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="联系方式" prop="kehuPhone">
                        <el-input v-model="kehuForm.kehuPhone"
                                  placeholder="联系方式" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="联系方式" prop="kehuPhone">
                            <el-input v-model="ruleForm.kehuPhone"
                                      placeholder="联系方式" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="货物订单号" prop="goodsName">
                       <el-input v-model="ruleForm.goodsName"
                                 placeholder="货物订单号" clearable  :readonly="ro.goodsName"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="货物订单号" prop="goodsName">
                           <el-input v-model="ruleForm.goodsName"
                                     placeholder="货物订单号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
            <input id="goodsId" name="goodsId" type="hidden">
            <input id="kehuId" name="kehuId" type="hidden">
            <input id="cheliangId" name="cheliangId" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="购买数量" prop="goodsOrderNumber">
                       <el-input v-model="ruleForm.goodsOrderNumber"
                                 placeholder="购买数量" clearable  :readonly="ro.goodsOrderNumber"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="购买数量" prop="goodsOrderNumber">
                           <el-input v-model="ruleForm.goodsOrderNumber"
                                     placeholder="购买数量" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="收货人" prop="goodsOrderShouhuoren">
                       <el-input v-model="ruleForm.goodsOrderShouhuoren"
                                 placeholder="收货人" clearable  :readonly="ro.goodsOrderShouhuoren"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="收货人" prop="goodsOrderShouhuoren">
                           <el-input v-model="ruleForm.goodsOrderShouhuoren"
                                     placeholder="收货人" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="联系方式" prop="goodsOrderPhone">
                       <el-input v-model="ruleForm.goodsOrderPhone"
                                 placeholder="联系方式" clearable  :readonly="ro.goodsOrderPhone"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="联系方式" prop="goodsOrderPhone">
                           <el-input v-model="ruleForm.goodsOrderPhone"
                                     placeholder="联系方式" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="送货地点" prop="goodsOrderAddress">
                       <el-input v-model="ruleForm.goodsOrderAddress"
                                 placeholder="送货地点" clearable  :readonly="ro.goodsOrderAddress"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="送货地点" prop="goodsOrderAddress">
                           <el-input v-model="ruleForm.goodsOrderAddress"
                                     placeholder="送货地点" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="订单状态" prop="goodsOrderTypes">
                        <el-select v-model="ruleForm.goodsOrderTypes" :disabled="ro.goodsOrderTypes" placeholder="请选择订单状态">
                            <el-option
                                v-for="(item,index) in goodsOrderTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="订单状态" prop="goodsOrderValue">
                        <el-input v-model="ruleForm.goodsOrderValue"
                            placeholder="订单状态" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                userId:"",//当前登录人的id
                cheliangForm: {},
                goodsForm: {},
                kehuForm: {},
                ro:{
                    goodsName: false,
                    goodsId: false,
                    kehuId: false,
                    cheliangId: false,
                    goodsOrderNumber: false,
                    goodsOrderShouhuoren: false,
                    goodsOrderPhone: false,
                    goodsOrderAddress: false,
                    goodsOrderTypes: false,
                },
                ruleForm: {
                    goodsName: '',
                    goodsId: '',
                    kehuId: '',
                    cheliangId: '',
                    goodsOrderNumber: '',
                    goodsOrderShouhuoren: '',
                    goodsOrderPhone: '',
                    goodsOrderAddress: '',
                    goodsOrderTypes: '',
                },
                goodsOrderTypesOptions : [],
                cheliangOptions : [],
                goodsOptions : [],
                kehuOptions : [],
                rules: {
                   goodsName: [
                              { required: true, message: '货物订单号不能为空', trigger: 'blur' },
                          ],
                   goodsId: [
                              { required: true, message: '货物不能为空', trigger: 'blur' },
                              {  pattern: /^[1-9][0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   kehuId: [
                              { required: true, message: '购买客户不能为空', trigger: 'blur' },
                              {  pattern: /^[1-9][0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   cheliangId: [
                              { required: true, message: '车辆不能为空', trigger: 'blur' },
                              {  pattern: /^[1-9][0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   goodsOrderNumber: [
                              { required: true, message: '购买数量不能为空', trigger: 'blur' },
                              {  pattern: /^[1-9][0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   goodsOrderShouhuoren: [
                              { required: true, message: '收货人不能为空', trigger: 'blur' },
                          ],
                   goodsOrderPhone: [
                              {  required: true, message: '联系方式不能为空', trigger: 'blur' },
                              {  pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
                                 message: '联系方式格式不对',
                                 trigger: 'blur'
                              }
                          ],
                   goodsOrderAddress: [
                              { required: true, message: '送货地点不能为空', trigger: 'blur' },
                          ],
                   goodsOrderTypes: [
                              { required: true, message: '订单状态不能为空', trigger: 'blur' },
                              {  pattern: /^[1-9][0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");
            this.userId = this.$storage.get("userId");


            if (this.role != "管理员"){
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=goods_order_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.goodsOrderTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `cheliang/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.cheliangOptions = data.data.list;
            }
         });
         this.$http({
             url: `goods/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.goodsOptions = data.data.list;
            }
         });
         this.$http({
             url: `kehu/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.kehuOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            cheliangChange(id){
                this.$http({
                    url: `cheliang/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.cheliangForm = data.data;
                    }
                });
            },
            goodsChange(id){
                this.$http({
                    url: `goods/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.goodsForm = data.data;
                    }
                });
            },
            kehuChange(id){
                this.$http({
                    url: `kehu/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.kehuForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                let _this =this;
                _this.$http({
                    url: `goodsOrder/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                        _this.cheliangChange(data.data.cheliangId)
                        _this.goodsChange(data.data.goodsId)
                        _this.kehuChange(data.data.kehuId)
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.$http({
                            url:`goodsOrder/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.goodsOrderCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.goodsOrderCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
  height: 500px;

  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}</style>

