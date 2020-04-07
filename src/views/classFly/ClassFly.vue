<template>
<div>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <van-cell v-for="item in list" :key="item" title="ceshi" />
  </van-list>
  </van-pull-refresh>
  <van-tabs v-model="active" sticky>
  <van-tab v-for="index in 4" :title="'选项 ' + index" :key="index">
   <ul>
     <li>11</li>
     <li>12</li>
     <li>13</li>
     <li>14</li>
     <li>15</li>
     <li>16</li>
     <li>17</li>
     <li>18</li>
     <li>19</li>
     <li>110</li>
     <li>111</li>
     <li>112</li>
     <li>113</li>
     <li>140</li>
     <li>141</li>
     <li>142</li>
     <li>143</li>
     <li>144</li>
     <li>145</li>
     <li>146</li>
     <li>147</li>
     <li>148</li>
     <li>149</li>
     <li>150</li>
     <li>151</li>
     <li>152</li>
     <li>153</li>
     <li>154</li>
     <li>155</li>
     <li>156</li>
     <li>157</li>
     <li>158</li>
     <li>159</li>
     <li>160</li>
     <li>161</li>
     <li>162</li>
     <li>163</li>
     <li>164</li>
     <li>165</li>
     <li>166</li>
     <li>167</li>
     <li>168</li>
     <li>169</li>
     <li>170</li>
     <li>171</li>
     <li>172</li>
     <li>173</li>
     <li>174</li>
     <li>175</li>
     <li>176</li>
     <li>177</li>
     <li>178</li>
     <li>179</li>
     <li>180</li>
     <li>181</li>
     <li>182</li>
     <li>183</li>
     <li>184</li>
     <li>185</li>
     <li>186</li>
     <li>187</li>
     <li>188</li>
     <li>189</li>
     <li>190</li>
     <li>191</li>
     <li>192</li>
     <li>193</li>
     <li>194</li>
     <li>195</li>
     <li>196</li>
     <li>197</li>
     <li>198</li>
     <li>199</li>
     <li>1100</li>
   </ul>
  </van-tab>
</van-tabs>
</div>
</template>
<script>
import { List, PullRefresh,Tab,Tabs } from "vant";
export default {
  components: {
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    [Tab.name]:Tab,
    [Tabs.name]:Tabs
  },
  data() {
    return {
      active:"",
         isLoading: false,
         list: [],
      loading: false,
      finished: false
    };
  },
  mounted() {},
  methods:{
       onLoad() {
         
    },
    onRefresh(){}
  }
};
</script>
<style scoped>
.contnent {
  background: red;
  height: 300px;
  overflow: hidden;
}
</style>


