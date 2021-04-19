import { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from "@tarojs/components"
import IconFont from '../../components/iconfont';

import './index.scss'

const Index = () => {

  return (
    <View className="page">
      <View className="weui-cells__title">需求对接</View>
      <View className="weui-grids">
        <View className="weui-grid" onClick={() => { Taro.navigateTo({ url: '/pages/requirement/curd' }) }}>
          <View className="weui-grid__icon">
            <IconFont size={60} name="check-circle-fill" color='#0c00bf' />
          </View>
          <View className="weui-grid__label">发布需求</View>
        </View>
        <View className="weui-grid" onClick={() => { Taro.navigateTo({ url: '/pages/requirement/success' }) }}>
          <View className="weui-grid__icon">
            <IconFont size={60} name="check-circle-fill" color='#0c00bf' />
          </View>
          <View className="weui-grid__label">成功页</View>
        </View>
        <View className="weui-grid" onClick={() => { Taro.navigateTo({ url: '/pages/achievement/index' }) }}>
          <View className="weui-grid__icon">
            <IconFont size={60} name="check-circle-fill" color='#0c00bf' />
          </View>
          <View className="weui-grid__label">成果页</View>
        </View>
        <View className="weui-grid">
          <View className="weui-grid__icon">
            <IconFont size={60} name="close-circle-fill" />
          </View>
          <View className="weui-grid__label">成果页</View>
        </View>
      </View>
      <View className="weui-cells__title">提交需求</View>
      <View className="weui-grids">
        <View className="weui-grid" onClick={() => { Taro.navigateTo({ url: '/pages/requirement/curd' }) }}>
          <View className="weui-grid__icon">
            <IconFont size={60} name="check-circle-fill" color='#0c00bf' />
          </View>
          <View className="weui-grid__label">发布需求</View>
        </View>
        <View className="weui-grid" onClick={() => { Taro.navigateTo({ url: '/pages/requirement/success' }) }}>
          <View className="weui-grid__icon">
            <IconFont size={60} name="check-circle-fill" color='#0c00bf' />
          </View>
          <View className="weui-grid__label">成功页</View>
        </View>
        <View className="weui-grid" onClick={() => { Taro.navigateTo({ url: '/pages/achievement/index' }) }}>
          <View className="weui-grid__icon">
            <IconFont size={60} name="check-circle-fill" color='#0c00bf' />
          </View>
          <View className="weui-grid__label">成果页</View>
        </View>
        <View className="weui-grid">
          <View className="weui-grid__icon">
            <IconFont size={60} name="close-circle-fill" />
          </View>
          <View className="weui-grid__label">成果页</View>
        </View>
      </View>
    </View >
  )
}

export default Index