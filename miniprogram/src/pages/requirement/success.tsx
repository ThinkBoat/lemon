import { useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from "@tarojs/components"
import IconFont from '../../components/iconfont';

import './success.scss'

const Index = () => {

    return (
        <View className="page">
            <View className="weui-msg">
                <View className="weui-msg__icon-area">
                    <IconFont size={100} name="check-circle-fill" color='#0c00bf' />
                </View>
                <View className="weui-msg__text-area">
                    <View className="weui-msg__title">操作成功</View>
                    <View className="weui-msg__desc">您的需求信息提交成功，通过系统审核后将自动发布到科技服务需求大厅。</View>
                </View>
                <View className="weui-msg__opr-area">
                    <View className="weui-btn-area">
                        <View className="weui-btn weui-btn_primary">加速审核</View>
                    </View>
                </View>
                <View className="weui-msg__tips-area">
                    <View className="weui-msg__tips">如果需要加速审核，请点击以上按钮联系专属客服进入快速审核通道。</View>
                </View>
            </View>

        </View >
    )
}

export default Index