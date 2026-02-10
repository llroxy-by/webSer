import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, MessageCircle, Globe, Palette } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      name: 'QQ',
      icon: MessageCircle,
      handle: '123456789',
      href: '#',
    },
    {
      name: 'WeChat',
      icon: MessageCircle,
      handle: 'qiuruoyu_photo',
      href: '#',
    },
    {
      name: 'Behance',
      icon: Palette,
      handle: 'qiuruoyu',
      href: '#',
    },
    {
      name: 'Website',
      icon: Globe,
      handle: 'www.qiuruoyu.com',
      href: '#',
    },
  ];

  return (
    <section className="w-full min-h-screen bg-white py-20 sm:py-28 lg:py-32">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 tracking-wider mb-4">
            联系方式
          </h2>
          <div className="w-12 h-px bg-gray-300 mx-auto mb-6" />
          <p className="text-gray-500 font-light max-w-md mx-auto">
            期待与您的交流与合作，欢迎随时联系我
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-light text-gray-600 tracking-wider"
                >
                  姓名
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-all font-light"
                  placeholder="请输入您的姓名"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-light text-gray-600 tracking-wider"
                >
                  邮箱
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-all font-light"
                  placeholder="请输入您的邮箱"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-sm font-light text-gray-600 tracking-wider"
                >
                  留言
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-all font-light resize-none"
                  placeholder="请输入您的留言内容"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gray-900 text-white font-light tracking-wider hover:bg-gray-800 transition-colors rounded-none disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    发送中...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    发送留言
                  </span>
                )}
              </Button>

              {isSubmitted && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-700 text-sm font-light text-center">
                  感谢您的留言，我会尽快回复您！
                </div>
              )}
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="lg:pl-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-light text-gray-900 tracking-wider mb-6">
                  社交媒体
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gray-900 text-white flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                        <link.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {link.name}
                        </p>
                        <p className="text-sm text-gray-500 font-light">
                          {link.handle}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-xl font-light text-gray-900 tracking-wider mb-4">
                  合作咨询
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  如果您有摄影项目合作、商业拍摄需求或其他咨询，欢迎通过表单或社交媒体与我联系。
                </p>
                <div className="space-y-2 text-sm text-gray-500 font-light">
                  <p>工作时间：周一至周五 9:00 - 18:00</p>
                  <p>回复时间：通常在 24 小时内</p>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <blockquote className="text-gray-400 font-light italic text-sm leading-relaxed">
                  "摄影是光与影的诗歌，是时间的切片，是记忆的容器。"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
