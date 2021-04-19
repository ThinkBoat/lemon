import { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Input, Button, Textarea, Image, Picker, Form } from "@tarojs/components"
import Schema from 'async-validator';

import './curd.scss'

const validator = new Schema({
    title: {
        type: 'string',
        required: true,
        message: '请输入需求标题'
    },
    detail: {
        type: 'string',
        required: true,
        message: '请输入需求详情'
    },
    region: {
        type: 'string',
        required: true,
        message: '请选择所在地区'
    },
    industryType: {
        type: 'string',
        required: true,
        message: '请选择行业分类'
    },
    budget: {
        type: 'string',
        required: true,
        message: '请选择需求预算'
    },
    organizationType: {
        type: 'string',
        required: true,
        message: '请选择单位类型'
    },
    organizationName: {
        type: 'string',
        required: true,
        message: '请选择单位名称'
    },
    contactPerson: {
        type: 'string',
        required: true,
        message: '请输入联系人'
    },
    contactPhone: {
        type: 'string',
        required: true,
        message: '请输入联系电话'
    },
    startDate: {
        type: 'string',
        required: true,
        message: '请选择开始时间'
    },
    endDate: {
        type: 'string',
        required: true,
        message: '请选择结束时间'
    },
});

const Index = () => {
    const [dialog, setDialog] = useState<{ show: boolean, content: string }>({ show: false, content: '' })
    const [files, setFiles] = useState<string[]>([])
    const [selector] = useState<{
        'industryType': string[],
        'organizationType': string[],
        'budget': string[]
    }>({
        'industryType': ['冶金石化', '电子信息', '高端装备制造'],
        'organizationType': ['政府部门', '事业单位', '企业'],
        'budget': ['1万以下', '1万-5万', '5万-10万', '10万-20万', '20万-50万', '50万以上']
    })
    const [requirement, setRequirement] = useState<{
        organizationType: string,
        organizationName: string,
        industryType: string,
        budget: string,
        region: string,
        startDate: string,
        endDate: string,
        title: string,
        detail: string,
        contactPerson: string,
        contactPhone: String
    }>({
        organizationType: '',
        organizationName: '',
        industryType: '',
        budget: '',
        region: '',
        startDate: '',
        endDate: '',
        title: '',
        detail: '',
        contactPerson: '',
        contactPhone: ''
    })

    return (
        <View className="page">
            {
                dialog.show ?
                    <View className="fadeIn">
                        <View className="weui-mask"></View>
                        <View className="weui-dialog">
                            <View className="weui-dialog__bd">{dialog.content}</View>
                            <View className="weui-dialog__ft">
                                <View className="weui-dialog__btn weui-dialog__btn_primary" onClick={() => { setDialog({ ...dialog, show: false }) }}>知道了</View>
                            </View>
                        </View>
                    </View> : null
            }
            <Form onSubmit={(e) => {
                const submitRequirement = { ...requirement, ...e.detail.value }
                validator.validate(submitRequirement).then(() => {
                    Taro.navigateTo({ url: '/pages/requirement/success' })
                }).catch(({ errors }) => {
                    setDialog({ show: true, content: errors[0].message })
                })
            }}>
                <View className="weui-cells__group weui-cells__group_form">
                    <View className="weui-cells weui-cells_form">
                        <View className="weui-cell weui-cell_active weui-cell_big">
                            <View className="weui-cell__bd">
                                <Input className="weui-input" placeholder="请输入需求标题" name="title" placeholderClass="weui-input__placeholder" />
                            </View>
                        </View>
                        <View className="weui-cell weui-cell_active">
                            <View className="weui-cell__bd">
                                <Textarea className="weui-textarea" placeholder="请描述您的需求内容~" name="detail" onInput={(e) => { setRequirement({ ...requirement, detail: e.detail.value }) }} placeholderClass="weui-input__placeholder"></Textarea>
                                <View className="weui-textarea-counter">{requirement.detail.length}/200</View>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="weui-cells__group weui-cells__group_form">
                    <View className="weui-cells weui-cells_form">
                        <View className="weui-cell weui-cell_active weui-cell_select weui-cell_select-after">
                            <View className="weui-cell__hd">
                                <View className="weui-label weui-label_required">所在地区</View>
                            </View>
                            <View className="weui-cell__bd">
                                <Picker mode='region' value={requirement.region.split(',')} onChange={(e) => { setRequirement({ ...requirement, region: e.detail.value.join(',') }) }}>
                                    <Input disabled className="weui-input" placeholder="请选择所在地区" value={requirement.region} name='region' type="text" placeholderClass="weui-input__placeholder" />
                                </Picker>
                            </View>
                        </View>
                        <View className="weui-cell weui-cell_active weui-cell_select weui-cell_select-after">
                            <View className="weui-cell__hd">
                                <View className="weui-label weui-label_required">行业分类</View>
                            </View>
                            <View className="weui-cell__bd">
                                <Picker mode='selector' range={selector.industryType} onChange={(e) => { setRequirement({ ...requirement, industryType: selector.industryType[e.detail.value] }) }}>
                                    <Input disabled className="weui-input" placeholder="请选择行业分类" value={requirement.industryType} name='industryType' type="text" placeholderClass="weui-input__placeholder" />
                                </Picker>
                            </View>
                        </View>
                        <View className="weui-cell weui-cell_active weui-cell_select weui-cell_select-after">
                            <View className="weui-cell__hd">
                                <View className="weui-label weui-label_required">需求预算</View>
                            </View>
                            <View className="weui-cell__bd">
                                <Picker mode='selector' range={selector.budget} onChange={(e) => { setRequirement({ ...requirement, budget: selector.budget[e.detail.value] }) }}>
                                    <Input disabled className="weui-input" placeholder="请选择需求预算" value={requirement.budget} name='budget' type="text" placeholderClass="weui-input__placeholder" />
                                </Picker>
                            </View>
                        </View>
                        <View className="weui-cell weui-cell_active weui-cell_select weui-cell_select-after">
                            <View className="weui-cell__hd">
                                <View className="weui-label weui-label_required">开始时间</View>
                            </View>
                            <View className="weui-cell__bd">
                                <Picker mode='date' value={requirement.startDate} onChange={(e) => { setRequirement({ ...requirement, startDate: e.detail.value }) }}>
                                    <Input disabled className="weui-input" placeholder="请选择开始时间" value={requirement.startDate} name='startDate' type="text" placeholderClass="weui-input__placeholder" />
                                </Picker>
                            </View>
                        </View>
                        <View className="weui-cell weui-cell_active weui-cell_select weui-cell_select-after">
                            <View className="weui-cell__hd">
                                <View className="weui-label weui-label_required">结束时间</View>
                            </View>
                            <View className="weui-cell__bd">
                                <Picker mode='date' value={requirement.endDate} onChange={(e) => { setRequirement({ ...requirement, endDate: e.detail.value }) }}>
                                    <Input disabled className="weui-input" placeholder="请选择结束时间" value={requirement.endDate} name='endDate' type="text" placeholderClass="weui-input__placeholder" />
                                </Picker>
                            </View>
                        </View>
                        <View className="weui-cell weui-cell_uploader">
                            <View className="weui-cell__bd">
                                <View className="weui-uploader">
                                    <View className="weui-uploader__hd">
                                        <View className="weui-uploader__overview">
                                            <View className="weui-uploader__title">附件上传（选填）</View>
                                            <View className="weui-uploader__info">{files.length}/9</View>
                                        </View>
                                        <View className="weui-uploader__tips">仅支持图片格式,最多上传9张</View>
                                    </View>
                                    <View className="weui-uploader__bd">
                                        <View className="weui-uploader__files">
                                            {
                                                files.map((url) => {
                                                    return (<View className="weui-uploader__file" onClick={() => {
                                                        Taro.previewImage({
                                                            current: url, // 当前显示图片的http链接
                                                            urls: files // 需要预览的图片http链接列表
                                                        })
                                                    }}>
                                                        <Image className="weui-uploader__img" src={url} mode="aspectFill" />
                                                    </View>)
                                                })
                                            }
                                        </View>
                                        <View className="weui-uploader__input-box">
                                            <View className="weui-uploader__input" onClick={() => {
                                                Taro.chooseImage({
                                                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                                                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                                                    success: function (res) {
                                                        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                                                        setFiles(res.tempFilePaths)
                                                    }
                                                })
                                            }} />
                                        </View>

                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="weui-cells__group weui-cells__group_form">
                    <View className="weui-cells weui-cells_form">
                        <View className="weui-cell weui-cell_active weui-cell_select weui-cell_select-after">
                            <View className="weui-cell__hd">
                                <View className="weui-label weui-label_required">单位类型</View>
                            </View>
                            <View className="weui-cell__bd">
                                <Picker mode='selector' range={selector.organizationType} onChange={(e) => { setRequirement({ ...requirement, organizationType: selector.organizationType[e.detail.value] }) }}>
                                    <Input disabled className="weui-input" placeholder="请选择单位类型" value={requirement.organizationType} name='organizationType' type="text" placeholderClass="weui-input__placeholder" />
                                </Picker>
                            </View>
                        </View>
                        <View className="weui-cell weui-cell_active">
                            <View className="weui-cell__hd">
                                <View className="weui-label weui-label_required">单位名称</View>
                            </View>
                            <View className="weui-cell__bd">
                                <Input className="weui-input" placeholder="请输入单位名称" name='organizationName' type="text" placeholderClass="weui-input__placeholder" />
                            </View>
                        </View>
                        <View className="weui-cell weui-cell_active">
                            <View className="weui-cell__hd">
                                <View className="weui-label weui-label_required">联系人</View>
                            </View>
                            <View className="weui-cell__bd">
                                <Input className="weui-input" placeholder="请输入联系人" name='contactPerson' type="text" placeholderClass="weui-input__placeholder" />
                            </View>
                        </View>
                        <View className="weui-cell weui-cell_active">
                            <View className="weui-cell__hd">
                                <View className="weui-label weui-label_required">联系电话</View>
                            </View>
                            <View className="weui-cell__bd">
                                <Input className="weui-input" placeholder="请输入联系电话" name='contactPhone' type="number" placeholderClass="weui-input__placeholder" />
                            </View>
                        </View>
                    </View>
                </View>
                <Button formType='submit' className="weui-btn_cell weui-btn_cell-primary">提交需求</Button>
            </Form>
        </View >
    )
}

export default Index